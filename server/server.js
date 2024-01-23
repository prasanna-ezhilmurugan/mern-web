import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import customerModel from './models/customer.js';

dotenv.config();

const mongodb_URL = process.env.mongodb_URL;
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(mongodb_URL);
app.post("/register", (req, res) => {
  customerModel
    .create(req.body)
    .then((customer) => res.json(customer))
    .catch((error) => res.json(error));
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
