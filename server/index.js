import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("database error", err));

app.post("/api/employees", async (req, res) => {});

app.post("/api/projects", async (req, res) => {});

app.post("/api/project_assignments", async (req, res) => {});

app.get("/api/project_assignments", async (req, res) => {});
