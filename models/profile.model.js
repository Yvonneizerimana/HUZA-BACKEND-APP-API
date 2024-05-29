import {mongoose,Schema} from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },

    country: {
      type: String,
      required: false,
    },
    province: {
      type: String,
      required: false,
    },
    district: {
      type: String,
      required: false,
    },
    sector: {
      type: String,
      required: false,
    },

    school: {
      type: String,
      required: false,
    },
    major: {
      type: String,
      required: false,
    },
    didyoufinished: {
      type: Boolean,
      required: false,
    },
    timeofstudy: {
      type: String,
      required: false,
    },
    resume: {
      type: String,
      required: false,
    },
    nationalID: {
      type: String,
      required: false,
    },
    certificate: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
      enum: ["CalinaryArt", "MakeupDesign", "Braiding", "Paint"],
    },
    status:{
      type: String,
      required: false,
      default: "Pending",
    },
    user:{
      type:Schema.Types.ObjectId,
      ref:'allUsers',
      required:false
    }
  },

  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
