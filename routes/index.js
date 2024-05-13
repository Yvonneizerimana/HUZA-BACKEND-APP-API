import adminRouter from "./admin.route.js";
import userRouter from "./user.route.js";
import skilledroute from "./skilled.route.js";
import express from "express";


const router = express.Router();
router.use('/admin',adminRouter);   
router.use('/user',userRouter);   
router.use('/skilled',skilledroute)
export default router;

