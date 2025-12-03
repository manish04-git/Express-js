import { MongoClient } from "mongodb";

const url="mongodb+srv://momo:M%40nish0419@momo.btpnxp2.mongodb.net/?appName=Momo"

const database="school";
const collection="students";
const client=new MongoClient(url);

client.connect().then(()=>{
  console.log(".......connected........");
  

})

async function dbconnection(){
const db=client.db(database);
const collectionResult=db.collection(collection);
const result=await collectionResult.find().toArray();
console.log(result);

}
dbconnection();

