import profileModel from "../models/profile.model.js";
import upload from "../middlewares/fileupload.js";

const profileController = {
  create: async (req, res) => {
    const { firstName, lastName, email, Address, education ,documents} = req.body;
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
        photo: req.files[3].filename
      },
      
    });
    res.status(200).json({
      status: "success",
      profile: profile,
    });
  },
  delete:async(req,res)=>{
    try{
const removing = await profileModel.findByIdAndDelete(req.params.id,req.body)
res.status(201).json({
    message:'contact was deleted',
    contact:removing

   })
    }
    catch(error){
        console.log(error)
    }
  },
  updating :async(req,res)=>{
    try{
        const updating = await profileModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).json({
            message:'contact was updated',
            contact:updating})
        
    }catch(error){
       console.log(error) 
    }

  }
};
export default profileController;
