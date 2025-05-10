import express, { json } from "express";
import mongoose from "mongoose";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express();
app.use(json());
app.use(cors())
const router = express.Router();

router.post("/api/user/register", async(req, res) => {
  try {
    const { username, name, dob, phone, email, password } = req.body;
    let user = new User({ username, name, dob, phone, email });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    user.save();
    res.status(200).json({message: 'User registered successfully'})
  } catch (error) {
    res.json({ message: error });
  }
});

router.post('/api/user/login', async(req, res) => {
  try{
    const { email, password } = req.body
    const existingUser = await User.findOne({email})
    if(!existingUser){
      return res.json({message: 'User not registered'})
    }
    const isMatch = await bcrypt.compare(password, existingUser.password)
    if(!isMatch){
      return res.json({message: 'Incorrect Password'})
    }
    const token = jwt.sign({id: existingUser._id}, 'secret123', {expiresIn: '1h'})
    return res.json({authToken: token, message: 'Login Successful'})
  }catch(error){
    return res.json({message: `Internal server error: ${error}`})
  }
})

app.use(router);

mongoose
  .connect(
    "mongodb+srv://webdeveloper005ats:15n8Dj9W9UHruphJ@cluster0.5y4pmvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Database is connected"))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
