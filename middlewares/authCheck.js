import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import adminModel from "../models/allUsers.model.js";

dotenv.config();

const checkUsers = {
    admin: async (req, res, next) => {
        try {
            const token = req.cookies.token;
            if (!token) {
                return res.status(401).json({ success: false, message: "Access token not found" });
            }

            const payload = jwt.verify(token, process.env.TOKEN_SECRET);
            const email = payload.email;

            const user = await adminModel.findOne({ email: email });
            if (!user || user.role !== "admin") {
                return res.status(403).json({ success: false, message: "Access denied. You're not authorized as an admin." });
            }

            next();
        } catch (error) {
            console.error(error.message);
            return res.status(401).json({ success: false, message: "Invalid access token" });
        }
    },

    user: async (req, res, next) => {
        try {
            const token = req.cookies.token;
            if (!token) {
                return res.status(401).json({ success: false, message: "Access token not found" });
            }

            const payload = jwt.verify(token, process.env.TOKEN_SECRET);
            const email = payload.email;

            const user = await adminModel.findOne({ email: email });
            if (!user || user.role !== "user") {
                return res.status(403).json({ success: false, message: "Access denied. You're not authorized as a user." });
            }

            next();
        } catch (error) {
            console.error(error.message);
            return res.status(401).json({ success: false, message: "Invalid access token" });
        }
    },

    skilled: async (req, res, next) => {
        const token = req.cookies.token;
        console.log(token)
        try {
        
            
            if (!token) {
                return res.status(401).json({ success: false, message: "Access token not found" });
            }

            const payload = jwt.verify(token, process.env.TOKEN_SECRET);
            const emailpayload = payload.email;

            const user = await adminModel.findOne({ email: emailpayload });
            if (user.role !== "skilled") {
                return res.status(403).json({ success: false, message: "Access denied. You're not authorized as a skilled user." });
            }

            next();
        } catch (error) {
            console.error(error.message);
            return res.status(401).json({ success: false, message: "Invalid access token" });
        }
    }
};

export default checkUsers;
