//const express=require('express');
import express from 'express';
const app=express();
import home,{contact} from './pages/home.js';
const port=3000;

app.get("/",(req,res)=>{
  res.send(home())
});

app.get("/about",(req,res)=>{
  res.send("<h1>About Page</h1>")
})
app.get("/contact",(req,res)=>{
  res.send(contact())
})

app.listen(port);
 