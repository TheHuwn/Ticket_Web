export class UnauthorizedError extends Error {
  statusCode = 401;
  constructor() {
    super("Not authorized");
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
