import { expressjwt } from "express-jwt";
import dotenv from "dotenv";
dotenv.config();

const authjwt = () => {
  return expressjwt({
    secret: process.env.SECRET,
    algorithms: ["HS256"],
    // isRevoked: (req, payload, done)=>{
    //     done(null, true)
    // }
  }).unless({
    path: [
      "/api-doc",
      "/api/skilled/createSkilled",
      "/api/skilled/loginSkilled",
      "/api/skilled/verify",
      "/api/skilled/forgotPassword",
      "/api/skilled/resetPassword",
      "/api/admin/create",
      "/api/admin/login",
      "/api/admin/verify",
      "/api/admin/forgotPassword",
      "/api/admin//resetPassword/:resetToken",
      "/api/admin/logout",
      "/api/user/create",
      "/api/user/login",
      "/api/user/verify",
      "/api/user/forgotPassword",
      "/api/user//resetPassword/:resetToken"
     

     
    ],
  });
};
export default authjwt;
