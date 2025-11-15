import express from 'express';
import path from 'path';

const app=express();
const port=3200;
const absPath=path.resolve('view');
app.get("/",(req,res)=>{
  res.send("<h1>this is home page</h1>")
})

app.get("/about",(req,res,next)=>{
  const error=new Error('')
  error.status=404;
  next(error);  
})

app.get("/error",(req,res)=>{
  res.send1("<h1>this is error page</h1>")// we throw a error here
})



app.use((error,req,res,next)=>{
  res.status(error.status ||500).sendFile(absPath+'/404page.html')
  // res.status(404).sendFile(absPath+'/404page.html')
})
app.listen(port);