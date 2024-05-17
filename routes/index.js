
import userRouter from "./allUsers.route.js";
import profileRoute from "./profile.route.js";
import contactRouter from "./contact.route.js";
import express from "express";


const router = express.Router();
router.use('/allUsers',userRouter);   
router.use('/profile',profileRoute);
router.use('/contact',contactRouter);
export default router;

