import Profile from "../models/profile.model.js";

import sgMail from "@sendgrid/mail";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const profileController = {
  create: async (req, res, next) => {
    try {
      const { firstName, lastName, ...otherFields } = req.body;
      if (
        !req.files ||
        !("resume" in req.files) ||
        !("nationalID" in req.files) ||
        !("certificate" in req.files) ||
        !("photo" in req.files)
      ) {
        return res.json({ message: "err" });
      }
      const dateNow = Date.now();
      const Resume = `${firstName}_Resume_${dateNow}`;
      const NationalID = `${firstName}_NationalID_${dateNow}`;
      const Certificate = `${firstName}_Certificate_${dateNow}`;
      const Photo = `${firstName}_Photo_${dateNow}`;
      const profileR = await cloudinary.v2.uploader.upload(
        req.files.resume[0].path,
        {
          folder: "upload",
          public_id: Resume,
        }
      );
      const profileN = await cloudinary.v2.uploader.upload(
        req.files.nationalID[0].path,
        {
          folder: "upload",
          public_id: NationalID,
        }
      );
      const profileC = await cloudinary.v2.uploader.upload(
        req.files.certificate[0].path,
        {
          folder: "upload",
          public_id: Certificate,
        }
      );
      const profileP = await cloudinary.v2.uploader.upload(
        req.files.photo[0].path,
        {
          folder: "upload",
          public_id: Photo,
        }
      );
      const newProfile = await Profile.create({
        firstName,
        lastName,
        resume: profileR.secure_url,
        nationalID: profileN.secure_url,
        certificate: profileC.secure_url,
        photo: profileP.secure_url,
        ...otherFields,
      });
      res.status(200).json({
        status: "success",
        profile: newProfile,
      });
    } catch (err) {
      console.log(err);
    }
  },




  delete: async (req, res) => {
    try {
      const removing = await Profile.findByIdAndDelete(req.params.id);
      res.status(201).json({
        message: "Profile was deleted",
        contact: removing,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },

update:async(req,res)=>{
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      profile: profile,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
},

  viewProfileById: async (req, res) => {
    try {

      const profile = await Profile.findById(req.query.id);
      if(profile){
        profile.status = 'in review';

        await profile.save();
      }
      res.status(200).json({
        status: "success",
        profile: profile,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },

viewProfileByCategory:async(req, res) => { 
  try {
    const profile = await Profile.find({ category: req.query.category });
    res.status(200).json({
      status: "success",
      profile: profile,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
},
verifyProfileByid:async(req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email });
    if(profile && profile.status === "in review" ){
      profile.status ='approved';
      await profile.save();
      const sendGridKey = process.env.SENDGRID_KEY;
      sgMail.setApiKey(sendGridKey);

      const mailOptions = {
        from: 'yvannyizerimana@gmail.com',
        to: req.query.email,
        subject: 'Profile Approved',
        html: `Hello ${profile.firstName} ${profile.lastName}, Your Profile has been approved<br> and published to public <br><br>HUZA App!`
      };

      await sgMail.send(mailOptions);
      console.log('Email sent successfully');
    }
    res.status(200).json({
      status: "success",
      profile: profile,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
},
denyProfileByEmail: async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.query.email }); // Corrected to find profile by email
    if (profile && profile.status === "in review") {
      profile.status = 'rejected';
      await profile.save();
      const sendGridKey = process.env.SENDGRID_KEY;
      sgMail.setApiKey(sendGridKey);

      const mailOptions = {
        from: 'yvannyizerimana@gmail.com',
        to: req.query.email,
        subject: 'Profile Not Approved',
        html: `Hello ${profile.firstName} ${profile.lastName},<br><br>Thank you for taking your time.<br>After careful consideration, we found that your document's do not fulfill all the requirements needed.<br>Please review all the requirements carefully and try again.<br><br><br><b>HUZA App!</b>`
      };

      await sgMail.send(mailOptions);
      console.log('Email sent successfully');
    }
    const deletedProfile= await Profile.deleteOne({ _id: profile._id });
    res.status(200).json({
      status: "Profile rejected and deleted successfully",
      profile: deletedProfile,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
},
allProfile:async(req,res)=>{
  try {
    const profile = await Profile.find();
    res.status(200).json({
      status: "success",
      profile: profile,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
},


viewProfileByStatus:async(req, res)=>{
  try {
    const profile = await Profile.find({ status: 'approved' });
    res.status(200).json({
      status: "success",
      profile: profile,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
};
export default profileController;
