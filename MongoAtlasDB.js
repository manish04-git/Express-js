// db.js
import { MongoClient } from "mongodb";

const url = "mongodb+srv://momo:M%40nish0419@momo.btpnxp2.mongodb.net/?appName=Momo"

const client = new MongoClient(url);

let dbConnection;

export async function connectDB() {
  try {
    if (!dbConnection) {
      await client.connect();
      console.log("MongoDB Connected Successfully...");
      dbConnection = client.db("school");  // database name
    }
    return dbConnection;
  } catch (err) {
    console.error("MongoDB Connection Failed:", err);
    throw err;
  }
}
