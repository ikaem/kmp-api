import { Model, Document } from 'mongoose';

export interface ErrorData {
  msg: string;
  param?: string;
}

export interface CustomerAttrs {
  firstName: string;
  lastName: string;
  email: string;
}

export interface CustomerDoc extends CustomerAttrs, Document {}

export interface CustomerModel extends Model<CustomerDoc> {
  build(attrs: CustomerAttrs): CustomerDoc;
}
