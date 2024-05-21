// controllers/profileController.js
// import profileModel from "../models/profile.model.js";
import { Profile, upload }from "../models/profile.model.js"
// import upload from "../middlewares/fileupload.js";
import sgMail from '@sendgrid/mail'

const profileController = {
  create: async (req, res) => {
    upload(req, res, async (err) => {  // Changed from upload.multiple to just upload
      if (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
      }
      // console.log(req.files)


      try {
        const { firstName, lastName, email, Address, education, category } = req.body;
  
        // Extract file paths from req.files (assuming successful upload)
        const resumePath = req.files['documents[resume]'] ? req.files['documents[resume]'][0].path : null;
        const nationalIDPath = req.files['documents[nationalID]'] ? req.files['documents[nationalID]'][0].path : null;
        const certificatePath = req.files['documents[certificate]'] ? req.files['documents[certificate]'][0].path : null;
        const photoPath = req.files['documents[photo]'] ? req.files['documents[photo]'][0].path : null;
  
        const newProfile = await Profile.create({
          firstName,
          lastName,
          email,
          Address: {
            country: Address.country,
            province: Address.province,
            district: Address.district,
            sector: Address.sector,
          },
          education: {
            school: education.school,
            major: education.major,
            didyoufinished: education.didyoufinished,
            timeofstudy: education.timeofstudy,
          },
          documents: {
            resume: resumePath,
            nationalID: nationalIDPath,
            certificate: certificatePath,
            photo: photoPath,
          },
          category,
        });
  
        // await newProfile.save(); // Save the new profile to the database
  
        res.status(200).json({
          status: "success",
          profile: newProfile,
        });
      }  catch (error) {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
    });
  },

  delete: async (req, res) => {
    try {
      const removing = await profileModel.findByIdAndDelete(req.params.id);
      res.status(201).json({
        message: 'Profile was deleted',
        contact: removing,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  },

  update: async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      try {
        const { firstName, lastName, email, Address, education, category } = req.body;

        const updateData = {};

        if (firstName) updateData.firstName = firstName;
        if (lastName) updateData.lastName = lastName;
        if (email) updateData.email = email;

        if (Address) {
          updateData.Address = {};
          if (Address.country) updateData.Address.country = Address.country;
          if (Address.province) updateData.Address.province = Address.province;
          if (Address.district) updateData.Address.district = Address.district;
          if (Address.sector) updateData.Address.sector = Address.sector;
        }

        if (education) {
          updateData.education = {};
          if (education.school) updateData.education.school = education.school;
          if (education.major) updateData.education.major = education.major;
          if (education.didyoufinished) updateData.education.didyoufinished = education.didyoufinished;
          if (education.timeofstudy) updateData.education.timeofstudy = education.timeofstudy;
        }

        if (req.files) {
          updateData.documents = {};
          if (req.files['documents[resume]']) updateData.documents.resume = req.files['documents[resume]'][0].filename;
          if (req.files['documents[nationalID]']) updateData.documents.nationalID = req.files['documents[nationalID]'][0].filename;
          if (req.files['documents[certificate]']) updateData.documents.certificate = req.files['documents[certificate]'][0].filename;
          if (req.files['documents[photo]']) updateData.documents.photo = req.files['documents[photo]'][0].filename;
        }
        if (category) updateData.category = category;

        const updating = await profileModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.status(201).json({
          message: 'Profile was updated',
          contact: updating,
        });
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
    });
  },

  viewProfileById:async(req,res) => {
    try {
      const profile = await profileModel.findById(req.query.id);
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
verifyProfileByid:async(req, res) => {
  try {
    const profile = await profileModel.findById(req.query.id);
    if(profile && profile.status === "in review" ){
      profile.status ='approved';
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
      profile.status = 'rejected';
      await profile.save();
      const sendGridKey = process.env.SENDGRID_KEY;
      sgMail.setApiKey(sendGridKey);

      const mailOptions = {
        from: 'yvannyizerimana@gmail.com',
        to: req.query.email,
        subject: 'Profile Not Approved',
        html: `Hello ${req.body.firstName} ${req.body.lastName},<br><br>Thank you for taking your time.<br>After careful consideration, we found that your document's do not fulfill all the requirements needed.<br>Please review all the requirements carefully and try again.<br><br><br><b>HUZA App!</b>`
      };

      await sgMail.send(mailOptions);
      console.log('Email sent successfully');
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
allProfile:async(req,res)=>{
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
}

};

export default profileController;
