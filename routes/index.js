import adminRouter from "./admin.route.js";
import express from "express";


const router = express.Router();
router.use('/admin',adminRouter);     
export default router;

