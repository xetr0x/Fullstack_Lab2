import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes.js";
import { fileURLToPath } from "url";
import path from "path";

const PORT = process.env.PORT || 5000;
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

const reactBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(reactBuildPath));

console.log("React build path:", path.join(reactBuildPath, "index.html"));
console.log(
  "Current directory:",
  "C:/uppgifter/Fullstack_Labs/Fullstack_Lab2/client/dist/index.html"
);
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("database error", err));
