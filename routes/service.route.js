import serviceController from "../controllers/service.controller.js";

import express from "express";

const routerService = express.Router();
import multer from 'multer';


const upload = multer({dest:'upload/'})

routerService.post("/createService",upload.fields([{name:'photo',maxCount:1}]), serviceController.addService);

routerService.put("/updateService/:id", serviceController.updateService);

routerService.delete("/deleteService", serviceController.deleteService);

routerService.get("/viewService", serviceController.listService);

export default routerService 