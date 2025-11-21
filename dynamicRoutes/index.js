import express from 'express';
const app=express();
const port=3000;

app.get("/",(req,res)=>{
const users=['manish','priyanshi','hardik'];


let data=`<ul>`
for(let i=0;i<users.length;i++){
 
 data+=`<li>
 <a href="user/${users[i]}">${users[i]}</a>
 
 </li>`

 console.log(users[i]);
 
}

data+=`</ul>`
  res.send(data);
})

app.get("/user/:name",(req,res)=>{
  const username=req.params.name;
  console.log(req.params.name);
  res.send(`this is ${username.toUpperCase()} page `)
  
})

app.listen(port);