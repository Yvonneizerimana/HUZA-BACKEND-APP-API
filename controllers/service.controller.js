import serviceModel from "../models/services.model.js"; // Corrected import path
import dotenv from "dotenv";
dotenv.config();
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const serviceController = {

  addService: async (req, res) => {
    try {
      const { category, ...otherFields } = req.body;
      if (!req.files || !("photo" in req.files)) {
        return res.json({ message: "err" });
      }
      const dateNow = Date.now();
   
      const Photo = `${category}_Photo_${dateNow}`;

      const profileP = await cloudinary.v2.uploader.upload(
        req.files.photo[0].path,
        {
          folder: "uploads",
          public_id: Photo,
        }
      );
      const newService = await serviceModel.create({
        category,
        photo: profileP.secure_url,
        ...otherFields,
      }); // Using create method
      return res.status(201).json({
        message: "Service created successfully",
        savedService: newService,
      });
    } catch (error) {

        console.log(error)
      return res.status(500).json({ error: error.message });
    }
  },
  listService: async (req, res) => {
    try {
      const allServices = await serviceModel.find();
      return res.status(200).json({
        status: "success",
        allServices: allServices,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  deleteService: async (req, res) => {
    try {
      const deletedService = await serviceModel.findByIdAndDelete(req.query.id);
      return res.status(200).json({
        status: "success",
        deletedService: deletedService,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  updateService: async (req, res) => {
    try {
      const updatedService = await serviceModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res.status(200).json({
        status: "success",
        updatedService: updatedService,
      });
    } catch (error) {
      console.log(error);
      // return res.status(500).json({ error: error.message });
    }
  },
};


export default serviceController;
