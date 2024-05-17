import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    details: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("Book", bookSchema);
export default bookModel;
