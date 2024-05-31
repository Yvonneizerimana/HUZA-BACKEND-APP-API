
import userRouter from "./allUsers.route.js";
import profileRoute from "./profile.route.js";
import contactRouter from "./contact.route.js";
import routerService from "./service.route.js";
import express from "express";
import broute from "./book.route.js";
import app from "./payment.route.js";
import app2 from "./payment2.route.js";


const router = express.Router();
router.use('/allUsers',userRouter);   
router.use('/profile',profileRoute);
router.use('/contact',contactRouter);
router.use("/booking",broute)
router.use("/service",routerService);
router.use("/payment",app);
router.use("/payment",app2);
export default router;

