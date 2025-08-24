import Employee from "../models/employee.js";
import Project from "../models/project.js";
import ProjectAssignment from "../models/projectAssignment.js";

export const addEmployee = async (req, res) => {
  try {
    const employees = await Employee.create(req.body);
    res.status(200).json(employees);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addProjectAssignment = async (req, res) => {
  try {
    const validateEmployee = await Employee.findById(req.body.employee_id);
    const validateProject = await Project.findById(req.body.project_code);
    if (!validateEmployee || !validateProject) {
      return res
        .status(400)
        .json({ error: "Invalid project_code or employee_id" });
    }
    const projectAssignment = await ProjectAssignment.create(req.body);
    res.status(200).json(projectAssignment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listProjectAssignments = async (req, res) => {
  try {
    const projectAssignments = await ProjectAssignment.find()
      .limit(5)
      .populate("employee_id")
      .populate("project_code"); // Populate with data from Employee and Project collections
    res.status(200).json(projectAssignments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
