import express from "express";
import {
  addEmployee,
  addProject,
  addProjectAssignment,
  listProjectAssignments,
} from "./controllers/generalController.js";

const router = express.Router();

router.post("/employees", addEmployee);
router.post("/projects", addProject);
router.post("/project_assignments", addProjectAssignment);
router.get("/project_assignments", listProjectAssignments);

export default router;
