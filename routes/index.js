
import userRouter from "./allUsers.route.js";
import profileRoute from "./profile.route.js";
import contactRouter from "./contact.route.js";

import express from "express";
import broute from "./book.route.js";


const router = express.Router();
router.use('/allUsers',userRouter);   
router.use('/profile',profileRoute);
router.use('/contact',contactRouter);
router.use("/booking",broute)
export default router;

