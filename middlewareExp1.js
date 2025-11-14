import express from 'express';
const app=express();
const port=3000;

function ageCheck(req,res,next){
  if(!req.query.age || req.query.age<18){
    res.send('alert !you can not access this page')
  } 
  else{
    next();
  }
}
app.use(ageCheck);

app.get("/",(req,res)=>{
  res.send("<h1>Home Page</h1>")
});

app.get("/login",(req,res)=>{
  res.send("<h1>login Page</h1>")
})
app.get("/admin",(req,res)=>{
  res.send("<h1>admin Page</h1>")
})

app.listen(port);