import express from 'express';
const app=express();
const port=3000;

app.set('view engine','ejs');

app.get("/",(req,res)=>{
  res.render('temp1',{name:'manishkumar',age:23})
});


app.listen(port);

// remplate engine:creates dynamic web pages by merging html template with data from server.
// we are using Ejs(embedded javascript)
// npm i ejs to install