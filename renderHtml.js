 import express from 'express';
 import home1 from './renderHtmlPages/home1.js';
 import login from './renderHtmlPages/login.js';
 import submit from './renderHtmlPages/submit.js';  


 const app=express();
 const port=3000; 

 app.get("/",(req,res)=>{
  res.send(home1())
 })
 app.get("/login",(req,res)=>{
  res.send(login())
 })

 app.post("/submit",(req,res)=>{
  res.send(submit())  
 })

 app.listen(port);