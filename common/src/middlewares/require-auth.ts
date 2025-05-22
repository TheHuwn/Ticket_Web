import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    throw new UnauthorizedError();
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as object;
    req.currentUser = payload;
  } catch (err) {
    throw new UnauthorizedError();
  }
  next();
};
