import { Request, Response } from 'express';
import { Customer } from '../';
import { DatabaseError } from '../errors';

export const createCustomer = async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;

  try {
    const customer = Customer.build({
      firstName,
      lastName,
      email,
    });
    await customer.save();

    res.status(201).send({
      data: customer,
    });
  } catch (e) {
    throw new DatabaseError(e.message);
  }
};
