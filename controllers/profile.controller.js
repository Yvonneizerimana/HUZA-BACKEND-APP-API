import profileModel from "../models/profile.model.js";
import upload from "../middlewares/fileupload.js";

const profileController = {
  create: async (req, res) => {
    const { firstName, lastName, email, Address, education } = req.body;
    // console.log(req.files)
    // if(!req.file){
    //     return res.status(400).json({
    //         message: "Please upload a file"
    //     })
    // }
    const profile = await profileModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    
      Address: req.body.Address,
      education: {
        school: req.body.education.school,
        major: req.body.education.major,
        didyoufinished: req.body.education.didyoufinished,
        timeofstudy: req.body.education.timeofstudy,
      },
      documents: {
        resume: req.files[0].filename,
        nationalID: req.files[1].filename,
        certificate: req.files[2].filename,
      },
      
    });
    res.status(200).json({
      status: "success",
      profile: profile,
    });
  },
};
export default profileController;
