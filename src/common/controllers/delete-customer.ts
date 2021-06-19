import { Request, Response } from 'express';

export const deleteCustomer = async (req: Request, res: Response) => {
  res.send({
    data: [{ id: '123', firstName: 'Karlo', email: 'karlo@karlo.com' }],
  });
};
