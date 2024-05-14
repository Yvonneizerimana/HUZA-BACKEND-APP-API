import profileController from "../controllers/profile.controller.js";
import upload from "../middlewares/fileupload.js";
import { Router } from "express";
const profileRoute = Router();

profileRoute.post(
  "/createProfile",
  upload.array("documents"),

  profileController.create
);

export default profileRoute;
