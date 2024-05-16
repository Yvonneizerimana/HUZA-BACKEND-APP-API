import userModel from "../models/user.model.js";
import skilledModel from "../models/skilled.model.js"
import adminModel from "../models/admin.model.js"

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const checkUsers={

    //admin check
     admin:async (req, res, next) => {
    const tokenn = req.cookies.token;
    try {
        if (!tokenn) {
            return res.status(401).json({ success: false, message: "Access token not found" });
        }

        try {
            const payload = jwt.verify(tokenn, process.env.TOOKEN_SECRETE); 
            const email = payload.email;

            const user = await adminModel.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            if (user.role !== "admin") {
                return res.status(403).json({ success: false, message: "Access denied you're not authorized as admin" });
            }

    
            next();
            
        } catch (error) {
            console.log(error.message);
            return res.status(401).json({ success: false, message: "Invalid access token" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
},

//user check

user:async (req, res, next) => {
    const tokenn = req.cookies.token;
    try {
        if (!tokenn) {
            return res.status(401).json({ success: false, message: "Access token not found" });
        }

        try {
            const payload = jwt.verify(tokenn, process.env.TOOKEN_SECRETE); 
            const email = payload.email;

            const user = await userModel.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            if (user.role !== "user") {
                return res.status(403).json({ success: false, message: "Access denied you're not authorized as a user" });
            }

    
           next()
            
        } catch (error) {
            console.log(error.message);
            return res.status(401).json({ success: false, message: "Invalid access token" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
},

skilled:async (req, res, next) => {
    const tokenn = req.cookies.token;
    try {
        if (!tokenn) {
            return res.status(401).json({ success: false, message: "Access token not found" });
        }

        try {
            const payload = jwt.verify(tokenn, process.env.SECRET); 
            const email = payload.email;

            const user = await skilledModel.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ success: false, message: "skilled user not found" });
            }

            if (user.role !== "skilled") {
                return res.status(403).json({ success: false, message: "Access denied you're not authorized as a skilled user" });
            }

    
           next()
            
        } catch (error) {
            console.log(error.message);
            return res.status(401).json({ success: false, message: "Invalid access token" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
}

export default checkUsers;
