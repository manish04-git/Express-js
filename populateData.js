import express from "express";
import { MongoClient, ObjectId } from "mongodb";
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // middleware to recieve json data

const dbName = "school";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

client.connect().then((connection) => {
  const db = connection.db(dbName);

  app.get("/api", async (req, res) => {
    const collection = db.collection("teachers");
    const result = await collection.find().toArray();
    res.send(result);
  });

  app.get("/ui",async(req,res)=>{
    const collection=db.collection('teachers');
    const result=await collection.find().toArray();

    res.render('teacher',{result});

  })

  
// delete data from mongodb 
app.delete("/delete/:id",async(req,res)=>{
  console.log(req.params.id);
  
  const collection=db.collection('teachers');
  const result=await collection.deleteOne({_id: new ObjectId(req.params.id)})

  if(result){
    res.send({
      message:"success",
      success:true
    })
    
  }else{
    res.send({
      message:"failed",
      success:false
    })
  }
})
// delete with button
app.get("/ui/delete/:id",async(req,res)=>{
  console.log(req.params.id);
  
  const collection=db.collection('teachers');
  const result=await collection.deleteOne({_id: new ObjectId(req.params.id)})

  if(result){
    res.send('<h1>data deleted successfully</h1>')
    
  }else{
    res.send('<h1>failed</h1>')
  }
})

// populate data for form

app.get("/ui/teacher/:id",async(req,res)=>{
  const id=req.params.id;
  console.log(id);

  const collection =db.collection("teachers");
  const result=await collection.findOne({_id: new ObjectId(req.params.id)})
  
  res.render("update-teacher",{result})
})

// geting data from id

app.get("/teacher/:id",async(req,res)=>{
  const id=req.params.id;
  console.log(id);
  const collection=db.collection("teachers");
  const result=await collection.findOne({_id : new ObjectId(req.params.id)})
  
  res.send({
    message:"success",
    success:true,
    result:result
  })

})

});
app.listen(3200);
