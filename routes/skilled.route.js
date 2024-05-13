import skilledController from "../controllers/skilled.controller.js";
import Validation from "../middlewares/Validation.js";
import { Router } from "express";
const skilledroute = Router()




skilledroute.post("/createSkilled",Validation.skilledValidation,skilledController.signup)
skilledroute.post("/loginSkilled",skilledController.login)
skilledroute.post("/verify",skilledController.ValidateOpt)
skilledroute.post("/forgotPassword",skilledController.ForgotPassword)
skilledroute.post("/resetPassword",skilledController.ResetPassword)
export default skilledroute