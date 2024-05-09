import skilledController from "../controllers/client.controller.js";
import { Router } from "express";
const route = Router()



route.post("/createSkilled",skilledController.signup)
route.post("/loginSkilled",skilledController.login)
route.post("/verify",skilledController.ValidateOpt)
route.post("/forgotPassword",skilledController.ForgotPassword)
route.post("/resetPassword",skilledController.ResetPassword)
export default route