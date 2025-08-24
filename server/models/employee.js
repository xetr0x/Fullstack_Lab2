import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    _id: { type: String },
    full_name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    hashed_password: { type: String, required: true },
  },
  { timestamps: true }
);

export default employeeSchema;
