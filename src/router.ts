import Router from 'express';
import { body, param } from 'express-validator';
import { Types } from 'mongoose';
import { createCustomer, deleteCustomer, getCustomers } from './common/';

const router = Router();

router.get('/', (_req, res) => {
  res.json('Welcome to kmp-api v0.01');
});

router.get('/customers', getCustomers);

router.post(
  '/customers',
  [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('First name is required'),
  ],
  createCustomer
);

router.delete(
  '/customers/:id',
  [
    param('id')
      .notEmpty()
      .custom((v) => Types.ObjectId.isValid(v))
      .withMessage('Valid customer id is required'),
  ],
  deleteCustomer
);

export default router;
