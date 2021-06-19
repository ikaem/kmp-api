import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError)
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });

  console.error(err);
  res.status(400).send({
    errors: [
      {
        msg: 'Something went wrong',
      },
    ],
  });
};
