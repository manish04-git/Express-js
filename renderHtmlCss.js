import express from 'express';
import path from 'path';
const app=express();
const port=3000;
const absPath=path.resolve('view'); // view is a folder name
const absPublicPath=path.resolve('public');
app.use(express.static(absPublicPath));

app.get("/",(req,res)=>{
  
  res.sendFile(absPath+'/home.html');
});

app.get("/about",(req,res)=>{

  res.sendFile(absPath+'/about.html')

})
app.get("/login",(req,res)=>{
  
  res.sendFile(absPath+'/login.html')
})
 
app.use((req,res)=>{

  res.status(404).sendFile(absPath+'/404page.html')
})

app.listen(port);