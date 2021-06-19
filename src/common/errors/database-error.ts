import { CustomError } from '.';

export class DatabaseError extends CustomError {
  statusCode = 500;

  constructor(private msg: string) {
    super(msg);

    Object.setPrototypeOf(this, DatabaseError.prototype);
  }

  serializeErrors() {
    const message = this.msg.includes('validation failed')
      ? this.msg.split(': ')[2]
      : this.msg;
    return [{ msg: message }];
  }
}
