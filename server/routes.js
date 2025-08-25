import express from "express";
import {
  addEmployee,
  addProject,
  addProjectAssignment,
  listProjectAssignments,
} from "./controllers/generalController.js";

const router = express.Router();

router.post("/api/employees", addEmployee);
router.post("/api/projects", addProject);
router.post("/api/project_assignments", addProjectAssignment);
router.get("/api/project_assignments", listProjectAssignments);

export default router;
