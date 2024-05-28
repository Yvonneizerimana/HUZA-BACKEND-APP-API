import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
const PORT =3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/verify-payment', async (req, res) => {
    try {
        // Extract transaction details from request body
        const { tx_ref, otp } = req.body;

        // Make a request to Flutterwave API to verify the OTP
        const response = await fetch('https://api.flutterwave.com/v3/payments/verify_otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_FLUTTERWAVE_SECRET_KEY', // Replace with your Flutterwave secret key
            },
            body: JSON.stringify({
                tx_ref: tx_ref,
                otp: otp,
            }),
        });

        const data = await response.json();

        // Handle Flutterwave API response
        if (response.ok) {
            
            res.status(200).json({ success: true, message: 'Payment successful!' });
        } else {
            // OTP verification failed
            // You can return an appropriate error response
            res.status(400).json({ success: false, message: data.message });
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle any server-side errors
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
