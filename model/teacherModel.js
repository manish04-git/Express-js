import mongoose from "mongoose";
import teacherSchema from "../schema/teacherSchema.js";



 const teacherModel=mongoose.model('teachers',teacherSchema)

 export default teacherModel;