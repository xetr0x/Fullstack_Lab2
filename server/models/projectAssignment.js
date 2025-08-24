import { Types, mongoose } from "mongoose";

const projectAssignmentSchema = new mongoose.Schema(
  {
    employee_id: {
      type: String,
      ref: "Employee",
      required: true,
      trim: true,
    }, // references employee
    project_code: {
      type: String,
      ref: "Project",
      required: true,
      trim: true,
    }, // references project
    start_date: { type: Date, required: true },
  },
  { timestamps: true }
);

const ProjectAssignment = mongoose.model(
  "ProjectAssignment",
  projectAssignmentSchema
);
export default ProjectAssignment;
