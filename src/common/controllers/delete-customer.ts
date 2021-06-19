import { Request, Response } from 'express';

import { Customer, DatabaseError } from '../';
import { BadRequestError } from '../';
import { CustomerDoc } from '../types';

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;

  let customer: CustomerDoc | null;

  try {
    customer = await Customer.findByIdAndDelete(id);
    if (customer === null)
      throw new BadRequestError([{ msg: 'No such customer' }]);
  } catch (e) {
    if (e instanceof BadRequestError) throw e;
    throw new DatabaseError(e.message);
  }
  res.send({
    data: customer,
  });
};
