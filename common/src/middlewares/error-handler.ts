import { Request, Response, NextFunction } from "express";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    return res.status(400).send({
      errors: [{ message: err.message }],
    });
  }
  res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
};
