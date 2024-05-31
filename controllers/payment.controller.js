import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import got from 'got';
import allUsers from '../models/allUsers.model.js';  

dotenv.config();

export const payment = async (req, res) => {
    try {
        const names = req.query.firstName + ' ' + req.body.lastName;
        const email = req.query.email;
        const phone= req.query.phone;
            const find=await allUsers.find({ names:allUsers.firstName+''+allUsers.lastName,email:allUsers.email, phone:allUsers.phoneNumber});
            if(!find){
                return res.status(404).json({ message: "invalid credentials" });
            }
        const payload = {
            tx_ref: 'RX1-' + uuidv4(),
            amount:"1000", // Adjust the amount as needed
            currency: "RWF",
            redirect_url: "http://localhost:5174/Booking",
            meta: {
                consumer_id: uuidv4(),
                consumer_mac: "92a3-912ba-1192a"
            },
            customer: {
                names,
                email,
                phone
            },
        
            customizations: {
                title: "EDAZ Platform",
                logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png"
            },
            configurations: {
                session_duration: 5, // Session timeout in minutes (maxValue: 1440 minutes)    
                max_retry_attempt: 5, // Max retry (int)
            }
        };

        console.log('Request Payload:', payload);

        const secretKey = process.env.SECRETE_KEY; // Ensure your .env file has SECRET_KEY

        if (!secretKey) {
            throw new Error('screte key does not exisit');
        }
        console.log('SECRET_KEY:', secretKey); 
        const response = await got.post("https://api.flutterwave.com/v3/payments", {
            headers: {
                Authorization: `Bearer ${secretKey}`,
                'Content-Type': 'application/json'
            },
            json: payload,
            responseType: 'json'
        });

        console.log('Response:', response.body);
        res.status(200).json({ data: response.body });
 
    } catch (err) {
        console.error('Error:', err);
        if (err.response) {
            console.error('Error Response:', err.response.body);
            res.status(err.response.statusCode).json({ error: err.response.body });
        } else {
            res.status(500).json({ error: 'Error' });
        }
    }
};