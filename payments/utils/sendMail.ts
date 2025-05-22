import nodemailer from "nodemailer";

export const sendConfirmationEmail = async (
  to: string,
  subject: string,
  html: string,
  attachments?: any[]
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // hoặc SMTP server của bạn
    auth: {
      user: process.env.EMAIL_USER, // khai báo trong .env
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: '"TicketHub" <no-reply@tickethub.com>',
    to,
    subject,
    html,
    attachments,
  });
};
