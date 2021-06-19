import { Request, Response } from 'express';
import { Customer, DatabaseError } from '..';

export const getCustomers = async (_req: Request, res: Response) => {
  try {
    const customers = await Customer.find();

    res.status(201).send({
      data: customers,
    });
  } catch (e) {
    throw new DatabaseError(e.message);
  }
};
