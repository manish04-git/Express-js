import { log } from 'console';
import express from 'express';
import { MongoClient } from 'mongodb';
const app=express();
app.set("view engine",'ejs');
app.use(express.urlencoded({extended:true}))
app.use(express.json()) // middleware to recieve json data

const dbName="school"
const url="mongodb://localhost:27017";
const client=new MongoClient(url);

client.connect().then((connection)=>{
  const db=connection.db(dbName);

  app.get("/api",async(req,res)=>{
const collection=db.collection("teachers");
const result=await collection.find().toArray();
res.send(result)
})

app.post("/add-teacher-api",async(req,res)=>{
  console.log(req.body);

  // condition if any one of three object unavailable
  const{name,age,subject}=req.body;
  if(!name || !age || !subject){
    res.send({"message":"operation failed",success:false})
    return false;
  }
  const collection=db.collection("teachers");
const result=await collection.insertOne(req.body)
  

  //res.send({"message":"success"});
  //res.send({"message":req.body});
 // res.send({"message":result})
  res.send({"message":"data stored",success:true,result})
})



})

app.listen(3200);