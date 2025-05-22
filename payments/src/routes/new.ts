import {
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
  requireAuth,
  validateRequest,
} from "@m-ticketing/common";
import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Order } from "../models/order";
import { Payment } from "../models/payment";
import { PaymentCreatedPublisher } from "../events/publishers/payment-created-publisher";
import { natsWrapper } from "../nats-wrapper";
import * as paypal from "../../utils/paypal";
import { sendConfirmationEmail } from "../../utils/sendMail";
import axios from "axios";
//Sửa ở đây
import QRCode from "qrcode";
//Đến đây

//Thay đổi này nữa
interface OrderResponse {
  order: {
    id: string;
    email: string;
    userId: string;
    ticket: { price: number; title?: string };
    status?: string;
    createdAt?: string;
  };
}

interface UserResponse {
  user: {
    id: string;
    name: string;
    email: string;
    // ...các trường khác nếu cần
  };
}
//Đến đây

const router = express.Router();

router
  .route("/api/payments")
  .post(
    requireAuth,
    [
      body("paypalId").not().isEmpty().withMessage("paypal id is required"),
      body("orderId").not().isEmpty().withMessage("orderId is required"),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
      const { orderId, paypalId } = req.body;

      const order = await Order.findById(orderId);

      if (!order) {
        throw new NotFoundError();
      }
      if (order.userId !== req.currentUser!.id) {
        throw new NotAuthorizedError();
      }
      if (order.status == OrderStatus.Cancelled) {
        throw new BadRequestError("can't pay a cancelled order");
      }
      if (order.status == OrderStatus.Complete) {
        throw new BadRequestError("can't pay a complete order");
      }

      const payment = Payment.build({
        orderId: order.id,
        paypalId,
      });
      await payment.save();

      await new PaymentCreatedPublisher(natsWrapper.client).publish({
        id: payment.id,
        orderId: order.id,
        paypalId,
      });
      order.set({ status: OrderStatus.Complete });
      await order.save();

      //Thay đổi mới
      // Gọi API sang orders để lấy email
      const orderRes = await axios.get<OrderResponse>(
        `http://orders-srv:3000/api/orders/${order.id}`,
        { headers: { Cookie: req.headers.cookie } }
      );
      const orderData = orderRes.data.order;

      // Gọi API sang auth để lấy thông tin user
      const userRes = await axios.get<UserResponse>(
        `http://auth-srv:3000/api/users/${orderData.userId}`
      );
      const userData = userRes.data.user;

      // Tạo QR code
      const qrContent = JSON.stringify({
        ticketId: orderData.id,
        // email: orderData.email,
        ticketTitle: orderData.ticket.title,
        // price: orderData.ticket.price,
        userId: order.userId,
        userName: userData.name,
      });
      const qrBuffer = await QRCode.toBuffer(qrContent);

      // Gửi mail xác nhận
      await sendConfirmationEmail(
        orderData.email,
        "Xác nhận thanh toán vé",
        `
          <h2>Chúc mừng ${userData.name} đã đặt vé thành công!</h2>
          <p>Thông tin vé:</p>
          <ul>
            <li>Mã vé: ${orderData.id}</li>
            <li>Giá: ${orderData.ticket.price} $</li>
            <li>Tên vé: ${orderData.ticket.title || ""}</li>
            <li>Ngày đặt: ${
              orderData.createdAt
                ? new Date(orderData.createdAt).toLocaleString("vi-VN", {
                    timeZone: "Asia/Ho_Chi_Minh",
                  })
                : "Không xác định"
            }</li>
            <li>Trạng thái: ${orderData.status || ""}</li>
            <li>User ID: ${orderData.userId}</li>
            <li>Email: ${orderData.email}</li>
            <li>Tên người dùng: ${userData.name}</li>
          </ul>
          <p>Mã QR vé được đính kèm trong email này. Hãy mở file để check-in sự kiện!</p>
        `,
        [
          {
            filename: "ticket-qr.png",
            content: qrBuffer,
            contentType: "image/png",
          },
        ]
      );
      //Đến đây

      res.status(201).json({
        status: "success",
        id: payment.id,
      });
    }
  );

export { router as createChargeRouter };
