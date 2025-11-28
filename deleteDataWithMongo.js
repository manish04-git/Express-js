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

  app.post("/add-teacher-api", async (req, res) => {
    console.log(req.body);

    // condition if any one of three object unavailable
    const { name, age, subject } = req.body;
    if (!name || !age || !subject) {
      res.send({ message: "operation failed", success: false });
      return false;
    }
    const collection = db.collection("teachers");
    const result = await collection.insertOne(req.body);

    res.send({ message: "data stored", success: true, result });
  });

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

});

app.listen(3200);
