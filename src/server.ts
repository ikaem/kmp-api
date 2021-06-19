import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';

import router from './router';
import { errorHandler, DatabaseError } from './common';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

const start = async () => {
  if (!process.env.PORT) throw new Error('PORT is undefined');
  if (!process.env.MONGO_URI) throw new Error('Database URI is undefined');

  const PORT = process.env.PORT;
  const MONGO_URI = process.env.MONGO_URI;
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.error(e.message);
    throw new DatabaseError('There was an error connecting to the database');
  }

  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};

start();
