import adminController from "../controllers/admin.controller.js";
import validation from "../middlewares/Validation.js"
// import checkUsers from "../middlewares/authCheck.js";
import express from 'express';
const app= express();
app.use(express.json)


const adminRouter = express.Router();

adminRouter.route('/create').post(validation.adminValidation,adminController.createAdmin);
adminRouter.route('/verify').post(validation.otpValidation,adminController.ValidateOpt);
adminRouter.route('/login').post(adminController.loginUser);
adminRouter.route('/forgotPassword').post(adminController.forgotPassword)
adminRouter.route('/resetPassword/:resetToken').post(adminController.resetPassword)
adminRouter.route('/logout').get(adminController.logout);

export default adminRouter;