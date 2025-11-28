 import mongoose from "mongoose"; 
 import { Schema } from "mongoose";

 const teacherSchema=mongoose.Schema({
  name:String,
  age:Number,
  subject:String

 })

 export default teacherSchema;