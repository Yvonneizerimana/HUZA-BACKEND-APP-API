import serviceController from "../controllers/service.controller.js";

import express from "express";

const routerService = express.Router();

routerService.post("/createService", serviceController.addService);

routerService.put("/updateService/:id", serviceController.updateService);

routerService.delete("/deleteService", serviceController.deleteService);

routerService.get("/viewService", serviceController.listService);

export default routerService 