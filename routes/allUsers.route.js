import allUsersController from '../controllers/allUsers.Controller.js'
import validation from "../middlewares/Validation.js"
// import checkUsers from "../middlewares/authCheck.js";
import express from 'express';
const app= express();
app.use(express.json)


const allUsersRouter = express.Router();

allUsersRouter.route('/create').post(validation.adminValidation,allUsersController.create);
allUsersRouter.route('/verify').post(validation.otpValidation,allUsersController.ValidateOpt);
allUsersRouter.route('/login').post(allUsersController.loginUser);
allUsersRouter.route('/forgotPassword').post(allUsersController.forgotPassword)
allUsersRouter.route('/resetPassword/:resetToken').post(allUsersController.resetPassword)
allUsersRouter.route('/logout').get(allUsersController.logout);

export default allUsersRouter;