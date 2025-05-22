import express from "express";
import { User } from "../models/user";

const router = express.Router();

router.get("/api/users/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      // thêm các trường khác nếu muốn
    },
  });
});

export { router as userInfoRouter };
