import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://webdeveloper005ats:15n8Dj9W9UHruphJ@cluster0.5y4pmvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Database is connected"))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
