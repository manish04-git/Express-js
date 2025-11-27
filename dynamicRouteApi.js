import express from 'express';
import userData from './users.json' with {type:'json'};
const app=express();
const port=3000;



app.get("/",(req,res)=>{
  console.log(userData);
  
  res.send(userData)
})

app.get("/users/:id",(req,res)=>{
const id=req.params.id;
//console.log(id);
let filterData=userData.filter((user)=>{
  return user.id==id;
})
res.send(filterData)

})

/*app.get("/username/:name",(req,res)=>{
  const name=req.params.name;
  let filterData=userData.filter((user)=>{
    return user.name.toLowerCase()==name.toLowerCase();
    res.end(filterData)
  })
})*/



app.listen(port);