import express from 'express';
const app=express();
const port=3000;
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

app.get("/add-user",(req,res)=>{
 res.render('addUser');
});

app.post("/submit-user",(req,res)=>{
 // console.log(req.body);
  res.render('submitUser',req.body);
 
})  

app.listen(port);