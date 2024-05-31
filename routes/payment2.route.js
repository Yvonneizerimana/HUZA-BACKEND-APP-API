import {payment } from '../controllers/payment2.controller.js'
import express from 'express';
const app = express();

app.get('/mobile',payment)

export default app 