import express from 'express';
import morgan from 'morgan';


const app=express();
const port=3000;
app.use(morgan('dev'));
app.get("/",(req,res)=>{
  res.send("<h1>Home Page</h1>")
});

app.get("/users",(req,res)=>{
  res.send("<h1>users Page</h1>")
})

app.get("/wait",(req,res)=>{
  setTimeout(()=>{
    res.send('result after 3 second')
  },3000);
})

app.listen(port);


// install external package
//npm i morgan = used to get logs,it is external middleware


//output ,when you put route
/*GET /users 304 2.725 ms - -
GET / 304 0.655 ms - -
GET /abc 404 1.777 ms - 142*/