import adminRouter from "./admin.route.js";
import userRouter from "./user.route.js";
import skilledroute from "./skilled.route.js";
import profileRoute from "./profile.route.js";
import contactRouter from "./contact.route.js";

import express from "express";
import broute from "./book.route.js";


const router = express.Router();
router.use('/admin',adminRouter);   
router.use('/user',userRouter);   
router.use('/skilled',skilledroute);
router.use('/profile',profileRoute);
router.use('/contact',contactRouter);
router.use("/booking",broute)
export default router;

