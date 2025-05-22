interface UserPayload {
  id: string;
  email: string;
  name: string;
}

declare namespace Express {
  interface Request {
    currentUser?: UserPayload;
  }
}
