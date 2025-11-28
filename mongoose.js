import mongoose from "mongoose";

import express from "express";
import teacherModel from "./model/teacherModel.js";
const app=express();
const port=3000;
try {
  await mongoose.connect("mongodb://localhost:27017/school");
  console.log("_____Connected________");
} catch (err) {
  console.error("MongoDB connection failed:", err);
}

app.get("/",async(req,res)=>{
  const teacherData=await teacherModel.find();
  res.send(teacherData);


})

app.listen(port);