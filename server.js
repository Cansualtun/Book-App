import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import booksRouter from './routes/booksRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json()); // JSON data available to use in the controllers since we'll have post request.

app.use(express.json());

// !! only for deployment:
app.use(helmet()); // to secure headers
app.use(xss()); // makes sure sanitize the input to prevent the cross-site scripting attacks
app.use(mongoSanitize()); // it prevents the MongoDB operator injection

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/books', authenticateUser, booksRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
