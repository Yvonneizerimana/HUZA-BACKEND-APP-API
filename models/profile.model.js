import mongoose from "mongoose";

const { Schema } = mongoose;

const profileSchema = new Schema(
  {
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
    documents: {
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
    },
    pathResume: {
      type: String,
      required: false,
    },
    pathID: {
      type: String,
      required: false,
    },
    pathCertificate: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
