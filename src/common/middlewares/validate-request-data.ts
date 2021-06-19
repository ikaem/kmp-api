import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { BadRequestError } from '../errors';

export const validateRequestData = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) throw new BadRequestError(errors.array());

  next();
};
