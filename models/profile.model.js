import mongoose from "mongoose"
import multer from "multer"
import path from "path" // For file upload handling
import fs from "fs" // For file upload handling

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Address: {
    country: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
  },
  education: {
    school: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    didyoufinished: {
      type: Boolean,
      required: true,
    },
    timeofstudy: {
      type: String,
      required: true,
    },
  },
  documents: { // Update document types with paths (**Profile Data**)
    resume: {
      type: String,
      required: true,
    },
    nationalID: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  category: {
    type: String,
    required: true,
    enum: ["Culinary Art", "Makeup Design", "Branding", "Plaint"]
  },
  status: {
    type: String,
    required: false,
    default: "Pending",
  },
}, { timestamps: true });


// Configure Multer for file upload (replace with your desired storage location)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/'); // Change this to your upload directory (ensure write permissions)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname); // Get file extension
    cb(null, uniqueSuffix + ext);
  }
});


const upload = multer({ storage: storage }).fields([
  { name: 'documents[resume]', maxCount: 1 },
  { name: 'documents[nationalID]', maxCount: 1 },
  { name: 'documents[certificate]', maxCount: 1 },
  { name: 'documents[photo]', maxCount: 1 },
])

const Profile = mongoose.model("Profile", profileSchema);

export{
  upload,
  Profile
}
