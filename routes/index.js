import adminRouter from "./admin.route.js";
import userRouter from "./user.route.js";
import skilledroute from "./skilled.route.js";
import profileRoute from "./profile.route.js";
import contactRouter from "./contact.route.js";
import express from "express";


const router = express.Router();
router.use('/admin',adminRouter);   
router.use('/user',userRouter);   
router.use('/skilled',skilledroute);
router.use('/profile',profileRoute);
router.use('/contact',contactRouter);
export default router;

