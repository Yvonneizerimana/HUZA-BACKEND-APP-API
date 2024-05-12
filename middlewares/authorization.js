// import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden - Invalid token' });
    }
    // Token is valid, attach decoded user information to request object
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  });
};
export default authenticateToken