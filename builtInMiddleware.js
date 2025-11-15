import express from "express";
import path from "path";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.send("<h1>Home Page</h1>");
  const abspath=path.resolve('view/homePage.html');
  res.sendFile(abspath)
});

app.get("/users", (req, res) => {
  res.send("<h1>users Page</h1>");
});
app.get("/products", (req, res) => {
  res.send("<h1>produts Page</h1>");
});

app.get("/login", (req, res) => {
  res.send(`
  <form action="/submit" method="POST">
  <input type="text" placeholder="enter your name" name="name">
  <input type="password" placeholder="enter your password" name="password">
  <button>submit</button>
  </form>
    `);
});
app.post("/submit", (req, res) => {
  console.log("users login details are :", req.body);
  res.send("submit page");
});

app.listen(port);

