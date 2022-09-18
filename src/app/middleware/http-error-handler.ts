import { Request, Response, NextFunction } from "express";
import { UnauthorizedError } from "express-jwt";
import { HttpErrors } from "../error";
import { HttpError } from "../error/http-error";


export const HttpErrorHandlerMiddleware = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Custom Error types
  if (err instanceof HttpError) {
    res.status(err.getStatusCode());
    res.send(err.toJSON());
  } else 
  // JWT Authentication Error
  if (err instanceof UnauthorizedError) {
    const httpError = new HttpErrors.HttpUnauthorizedError(err.message)
    
    res.status(httpError.getStatusCode());
    res.send(httpError.toJSON());
  } else {
    next(err)
  }
};
