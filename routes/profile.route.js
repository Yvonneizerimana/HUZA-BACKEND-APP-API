import profileController from "../controllers/profile.controller.js";
import upload from "../middlewares/fileupload.js";
import { Router } from "express";
const profileRoute = Router();

profileRoute.post(
  "/createProfile",
  upload.array("documents"),

  profileController.create
);
profileRoute.delete('/delete/:id',profileController.delete)
profileRoute.put('/update/:id',profileController.updating)
export default profileRoute;
