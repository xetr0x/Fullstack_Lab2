import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const projectSchema = new mongoose.Schema(
  {
    _id: { type: String, default: () => "Project_" + uuidv4() }, //_id automatically unique!
    project_name: { type: String, required: true, trim: true },
    project_description: { type: String, default: "" },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
