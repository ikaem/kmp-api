import { Request, Response } from 'express';
import { BadRequestError, Customer, DatabaseError } from '../';

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const customer = await Customer.deleteOne({ id });
    // const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      throw new BadRequestError([
        { msg: 'Email is already in use', param: 'email' },
      ]);
    }

    console.log('customer', customer);

    res.send({
      data: customer,
    });
  } catch (e) {
    throw new DatabaseError(e.message);
  }
};
