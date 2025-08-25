import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes.js";
import { fileURLToPath } from "url";
import path from "path";

const PORT = process.env.PORT || 5000;
dotenv.config(); //enables use of .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // create express app

app.use(express.json());
app.use(cors()); // enables cross-origin requests
app.use("/", router);

const reactBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(reactBuildPath));

app.get(/(.*)/, (req, res) => {
  // /(.*)/ instead of '*' in express v5
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

mongoose
  .connect(process.env.CONNECTION_URL) //connect to database
  .then(() => {
    app.listen(PORT, () =>
      //if successful connection, start server
      console.log(`server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("database error", err));
