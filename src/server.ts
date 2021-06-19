import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import router from './router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const start = async () => {
  if (!process.env.PORT) throw new Error('PORT is undefined');
  if (!process.env.MONGO_URI) throw new Error('Database URI is undefined');

  const PORT = process.env.PORT;
  const MONGO_URI = process.env.MONGO_URI;
  try {
    //   TODO start mongoose here
  } catch (e) {
    console.error(e.message);
    throw e;
  }

  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
};

start();
