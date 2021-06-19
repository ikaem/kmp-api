import { ErrorData } from '../types';

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(reason: string) {
    super(reason);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): ErrorData[];
}
