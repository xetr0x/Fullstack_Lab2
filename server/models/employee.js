import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const employeeSchema = new mongoose.Schema(
  {
    _id: { type: String, default: () => "Employee_" + uuidv4() }, // custom id with use of uuid, _id is automatically unique!
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

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
