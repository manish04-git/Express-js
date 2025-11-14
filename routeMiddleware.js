import express from 'express';
const app=express();
const port=3000;

function chekAge(req,res,next){
  if(!req.query.age || req.query.age<18){
    res.send('alert !you can not access this page')
  } else{
    next();
  }
  
}

function checkUrl(req,res,next){
  console.log(`user is accessing ${req.url}`);
  next(); 
  
}

app.get("/",(req,res)=>{
  res.send("<h1>Home Page</h1>")
});

app.get("/users",chekAge,checkUrl,(req,res)=>{
  res.send("<h1>users Page</h1>")
})
app.get("/products",chekAge,checkUrl,(req,res)=>{
  res.send("<h1>produts Page</h1>")
})
 
app.get("/login",checkUrl,chekAge,(req,res)=>{
  res.send("<h1>login Page</h1>")
})
app.listen(port);