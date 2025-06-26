import express from "express";
import dotenv from 'dotenv';
import cornRoute from "./routes/cornRoute";

const aa = dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const apiPrefix = "/api/v1";

app.use(express.json()); // Middleware to parse JSON bodies

app.use(`${apiPrefix}/corn`, cornRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});