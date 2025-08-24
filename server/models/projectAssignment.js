import mongoose from "mongoose";

const projectAssignmentSchema = new mongoose.Schema(
  {
    employee_id: { type: String, required: true, trim: true }, // references employee
    project_code: { type: String, required: true, trim: true }, // references project
    start_date: { type: Date, required: true },
  },
  { timestamps: true }
);

export default assignmentSchema;
