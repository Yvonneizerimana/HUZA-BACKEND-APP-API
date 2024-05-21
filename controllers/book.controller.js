import bookModel from "../models/book.model.js";
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail", // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const bookController = {
  book: async (req, res) => {
    try {
      const { name,phoneNumber,email,address, date, details } = req.body;

    //   if (!email || !bookingDate || !details) {
    //     return res.status(400).json({ success: false, message: 'Missing required booking details' });
    //   }

      const booking = await bookModel.create(req.body);

      // Send confirmation email to customer
      const customerMailOptions = {
        from: email ,
        to: email,
        subject: "Booking Confirmation",
        text: `Thank you for your booking. Here are your details:\nDate: ${date}\nDetails: ${details}`,
      };

      // Send booking details to the booking recipient
      const recipientMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.BOOKING_RECIPIENT_EMAIL,
        subject: "New Booking Received",
        text: `A new booking has been made. Here are the details:\nCustomer Email: ${email}\nDate: ${date}\nDetails: ${details}`,
      };

      // Send emails
      transporter.sendMail(customerMailOptions, (error, info) => {
        if (error) {
          return res.status(500).send({ message: 'Failed to send confirmation email', error });
        }

        transporter.sendMail(recipientMailOptions, (error, info) => {
          if (error) {
            return res.status(500).send({ message: 'Failed to send booking details to recipient', error });
          }
          res.status(200).send({ message: 'Booking successful and emails sent', booking: booking });
        });
      });
    } catch (errors) {
      res.status(500).json({ success: false, message: errors.message });
    }
  },
  deleteBooking:async (req,res)=>{
    try {
      const booking = await bookModel.findByIdAndDelete(req.params.id);
      if (!booking) {
        return res.status(404).json({ success: false, message: "Booking not found" });
      }
      res.status(200).json({ success: true, message: "Booking deleted" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
  getbookingbyname:async(req,res)=>{
    try {
      const booking = await bookModel.find({ name: req.query.name });
      res.status(200).json({
        status: "success",
        booking: booking,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }

  },
  allbooking:async(req,res)=>{
    try {
      const booking = await bookModel.find();
      res.status(200).json({
        status: "success",
        booking: booking,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },
};

export default bookController;
