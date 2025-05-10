import mongoose from "mongoose";

const user = new mongoose.Schema({
  username: {
    type: String,
  },
  name: {
    type: String,
  },

  dob: {
    type: Date,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", user);

export default User;
