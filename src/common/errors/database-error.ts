import { CustomError } from '.';

export class DatabaseError extends CustomError {
  statusCode = 500;

  constructor(private msg: string) {
    super(msg);

    Object.setPrototypeOf(this, DatabaseError.prototype);
  }

  serializeErrors() {
    return [{ msg: this.msg }];
  }
}
