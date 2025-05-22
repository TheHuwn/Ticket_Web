import { Subjects } from "./subjects";
import { OrderStatus } from "../types/order-status"; // Đảm bảo file này tồn tại

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    userId: string;
    status: OrderStatus;
    expiresAt: string;
    version: number;
    email: string; // thêm dòng này
    ticket: {
      id: string;
      price: number;
    };
  };
}
