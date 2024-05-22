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

  // create: async (req, res) => {
  //   upload(req, res, async (err) => {  // Changed from upload.multiple to just upload
  //     if (err) {
  //       console.log(err);
  //       return res.status(400).json({ message: err.message });
  //     }
  //     // console.log(req.files)

  //     try {
  //       const { firstName, lastName, email, Address, education,resume, nationalID, certificate, photo, category } = req.body;

  //       // Extract file paths from req.files (assuming successful upload)
  //       const resumePath = req.files['documents[resume]'] ? req.files['documents[resume]'][0].path : null;
  //       const nationalIDPath = req.files['documents[nationalID]'] ? req.files['documents[nationalID]'][0].path : null;
  //       const certificatePath = req.files['documents[certificate]'] ? req.files['documents[certificate]'][0].path : null;
  //       const photoPath = req.files['documents[photo]'] ? req.files['documents[photo]'][0].path : null;

  //       const newProfile = await Profile.create({
  //         firstName,
  //         lastName,
  //         email,
  //         Address: {
  //           country: Address.country,
  //           province: Address.province,
  //           district: Address.district,
  //           sector: Address.sector,
  //         },
  //         education: {
  //           school: education.school,
  //           major: education.major,
  //           didyoufinished: education.didyoufinished,
  //           timeofstudy: education.timeofstudy,
  //         },
  //         documents: {
  //           resume: resumePath,
  //           nationalID: nationalIDPath,
  //           certificate: certificatePath,
  //           photo: `/upload/`+photoPath,
  //         },
  //         category,
  //       });

  //       // await newProfile.save(); // Save the new profile to the database

  //       res.status(200).json({
  //         status: "success",
  //         profile: newProfile,
  //       });
  //     }  catch (error) {
  //       res.status(500).json({
  //         status: "error",
  //         message: error.message,
  //       });
  //     }
  //   });
  // },

  delete: async (req, res) => {
    try {
      const removing = await profileModel.findByIdAndDelete(req.params.id);
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
    

  },

  viewProfileById: async (req, res) => {
    try {
      const profile = await profileModel.findById(req.query.id);
      if (profile) {
        profile.status = "in review";
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
  viewProfileByCategory: async (req, res) => {
    try {
      const profile = await profileModel.find({ category: req.query.category });
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
  verifyProfileByid: async (req, res) => {
    try {
      const profile = await profileModel.findById(req.query.id);
      if (profile && profile.status === "in review") {
        profile.status = "approved";
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
  denyProfileByEmail: async (req, res) => {
    try {
      const profile = await profileModel.findOne({ email: req.query.email }); // Corrected to find profile by email
      if (profile && profile.status === "in review") {
        profile.status = "rejected";
        await profile.save();
        const sendGridKey = process.env.SENDGRID_KEY;
        sgMail.setApiKey(sendGridKey);

        const mailOptions = {
          from: "yvannyizerimana@gmail.com",
          to: req.query.email,
          subject: "Profile Not Approved",
          html: `Hello ${req.body.firstName} ${req.body.lastName},<br><br>Thank you for taking your time.<br>After careful consideration, we found that your document's do not fulfill all the requirements needed.<br>Please review all the requirements carefully and try again.<br><br><br><b>HUZA App!</b>`,
        };

        await sgMail.send(mailOptions);
        console.log("Email sent successfully");
      }
      const deletedProfile = await profileModel.findByIdAndDelete(req.query.id);
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
  allProfile: async (req, res) => {
    try {
      const profile = await profileModel.find();
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
};

export default profileController;
