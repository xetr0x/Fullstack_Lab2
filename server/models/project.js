import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    _id: { type: String },
    project_name: { type: String, required: true, trim: true },
    project_description: { type: String, default: "" },
  },
  { timestamps: true }
);

export default projectSchema;
