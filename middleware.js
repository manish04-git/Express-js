import express from 'express';
const app=express();
const port=3000;

/*function checkRout(req,res,next){
  console.log(`user is accessing ${req.url}`);
  next(); 
  
}

app.use(checkRout);
*/

app.use((req,res,next)=>{
  console.log(`user is accessing ${req.url}`);
  next(); 
  
})

app.get("/",(req,res)=>{
  res.send("<h1>Home Page</h1>")
});

app.get("/users",(req,res)=>{
  res.send("<h1>users Page</h1>")
})
app.get("/products",(req,res)=>{
  res.send("<h1>produts Page</h1>")
})

app.listen(port);