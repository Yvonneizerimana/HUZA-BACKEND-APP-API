import userController from "../controllers/user.controller.js";
import validation from "../middlewares/Validation.js"
// import checkUsers from "../middlewares/authCheck.js";
import express from 'express';
const app= express();
app.use(express.json)


const userRouter = express.Router();

userRouter.route('/create').post(validation.userValidation,userController.createUser);
userRouter.route('/verify').post(validation.otpValidation,userController.ValidateOpt);
userRouter.route('/login').post(userController.loginUser);
userRouter.route('/forgotPassword').post(userController.forgotPassword)
userRouter.route('/resetPassword/:resetToken').post(userController.resetPassword)
userRouter.route('/logout').get(userController.logout);

export default userRouter;