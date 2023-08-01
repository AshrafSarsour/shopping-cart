import { Response } from 'express';

interface SuccessResponse<T> {
  success: true;
  data: T;
}

interface ErrorResponse {
  success: false;
  error: string;
}

export const sendJsonResponse = <T>(res: Response, statusCode: number, data: T | ErrorResponse): void => {
  res.status(statusCode).json(data);
};  
