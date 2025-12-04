// server.js
import express from "express";
import { ObjectId } from "mongodb";
import { connectDB } from "./MongoAtlasDB.js";

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// 🔹 CREATE – Add new student
// POST /students
app.post("/students", async (req, res) => {
  try {
    const db = await connectDB();
    const students = db.collection("students");

    const { name, age, email } = req.body;

    if (!name || !age || !email) {
      return res.status(400).json({ message: "name, age and email are required"});
    }

    const result = await students.insertOne({ name, age, email });
    res.status(201).json({ message: "Student created", studentId: result.insertedId });
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🔹 READ ALL – Get all students
// GET /students
app.get("/students", async (req, res) => {
  try {
    const db = await connectDB();
    const students = db.collection("students");

    const result = await students.find().toArray();
    res.json(result);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🔹 READ ONE – Get student by ID
// GET /students/:id
app.get("/students/:id", async (req, res) => {
  try {
    const db = await connectDB();
    const students = db.collection("students");

    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const student = await students.findOne({ _id: new ObjectId(id) });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🔹 UPDATE – Update student by ID
// PUT /students/:id
app.put("/students/:id", async (req, res) => {
  try {
    const db = await connectDB();
    const students = db.collection("students");

    const { id } = req.params;
    const { name, age, email } = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updateDoc = {
      $set: {},
    };

    if (name !== undefined) updateDoc.$set.name = name;
    if (age !== undefined) updateDoc.$set.age = age;
    if (email !== undefined) updateDoc.$set.email = email;

    if (Object.keys(updateDoc.$set).length === 0) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    const result = await students.updateOne(
      { _id: new ObjectId(id) },
      updateDoc
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student updated" });
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🔹 DELETE – Delete student by ID
// DELETE /students/:id
app.delete("/students/:id", async (req, res) => {
  try {
    const db = await connectDB();
    const students = db.collection("students");

    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const result = await students.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted" });
  } catch (err) {
    console.error("Error deleting student:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🌐 Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
