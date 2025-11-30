import mongoose from "mongoose";

import express from "express";
import teacherModel from "./model/teacherModel.js";
import { log } from "console";
const app=express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
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

app.post("/save",async(req,res)=>{
  console.log(req.body);

  
if(!req.body.name || !req.body.age || !req.body.subject){
  res.send({
    message:"operation failed",
    success:false,
    result:teacherData
  })
  return false;
}
const teacherData=await teacherModel.create(req.body);
  console.log(teacherData);
  
  res.send({
    message:"operation success",
    success:true,
    result:teacherData
  })
  
  
})

//put and delete api
  // put=> updates data from database
  //delete=>deletes data from databas


app.put("/update/:id",async(req,res)=>{
  const id=req.params.id;

    console.log(req.body);

    res.send({
      message:"operation success",
      success:true,
      result:null
    })

    const data= await teacherModel.findByIdAndUpdate(id,{...req.body});
  })

  // to delete
  app.delete("/delete/:id",async(req,res)=>{
    const id =req.params.id;

    res.send({
      message:"operation success",
      success:true,
      result:null
    })
    const data=await teacherModel.findByIdAndDelete(id);
  })

app.listen(port);