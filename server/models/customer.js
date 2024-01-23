import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const customerModel = mongoose.model("customer", customerSchema);

export default customerModel;
