import {payment } from '../controllers/payment.controller.js'
import express from 'express';
const app = express();

app.get('/mobileMoney',payment)

export default app 