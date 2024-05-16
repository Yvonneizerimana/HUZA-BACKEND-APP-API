// controllers/profileController.js
import profileModel from "../models/profile.model.js";
import upload from "../middlewares/fileupload.js";

const profileController = {
  create: async (req, res) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      try {
        const { firstName, lastName, email, Address, education } = req.body;

        const profile = await profileModel.create({
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
            resume: req.files['documents[resume]'] ? req.files['documents[resume]'][0].filename : null,
            nationalID: req.files['documents[nationalID]'] ? req.files['documents[nationalID]'][0].filename : null,
            certificate: req.files['documents[certificate]'] ? req.files['documents[certificate]'][0].filename : null,
            photo: req.files['documents[photo]'] ? req.files['documents[photo]'][0].filename : null,
          },
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
        const { firstName, lastName, email, Address, education } = req.body;

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

};

export default profileController;
