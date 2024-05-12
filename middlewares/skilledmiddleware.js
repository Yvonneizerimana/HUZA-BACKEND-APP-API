import skilledModel from "../models/skilled.model.js";
import jwt from "jsonwebtoken";

const skilledMiddleware = async (req, res, next) => {
  if (req.cookies.token) {
    const token = req.cookies.token;
    console.log(token);

    try {
      const payload = jwt.decode(token);
      const emailPayload = payload.email;

      // Finding skilled in database
      const skilled = await skilledModel.findOne({ email: emailPayload });

      // if (!skilled) {
      //   return res.status(401).json({ message: "skilled not found" });
      // }

      // skilled exists, check their role
      const role = skilled.role;
      
      if (role === "skilled") {
        next();
      } else {
        return res.status(401).json({ message: "Access denied" });
      }
    } catch (error) {
      console.error("Error in userMiddleware:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ message: "Token not found" });
  }
};

export default skilledMiddleware;
