import { Document, Schema, Model, model } from 'mongoose';

interface CustomerAttrs {
  firstName: string;
  lastName: string;
  email: string;
}

interface CustomerDoc extends CustomerAttrs, Document {}

interface CustomerModel extends Model<CustomerDoc> {
  build(attrs: CustomerAttrs): CustomerDoc;
}

const customerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        message: (props) => `${props.value} is already in use`,
        validator: async function (email: string) {
          const user = await Customer.findOne({ email });
          if (user) return false;
        },
      },
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

customerSchema.statics.build = (attrs: CustomerAttrs) => {
  return new Customer(attrs);
};

export const Customer = model<CustomerDoc, CustomerModel>(
  'Customer',
  customerSchema
);
