import { ErrorData } from '../types';
import { CustomError } from '.';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(private errors: ErrorData[]) {
    super('Invalid request sent');

    Object.setPrototypeOf(this, BadRequestError);
  }

  serializeErrors() {
    return this.errors.map(({ msg, param }) => ({
      msg,
      param,
    }));
  }
}
