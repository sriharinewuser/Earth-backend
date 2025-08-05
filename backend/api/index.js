import express from 'express';
import cors from 'cors';
import { dbconnect } from '../config/database.config.js';
import foodRouter from '../routers/food.router.js';
import userRouter from '../routers/user.router.js';
import orderRouter from '../routers/order.router.js';

const app = express();
dbconnect();

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// Vercel-compatible export
export default app;
