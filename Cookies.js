import express from 'express';
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.render("Login"); // Login.ejs
});

app.post("/profile", (req, res) => {
  const userName = req.body.name;

  // Set multiple cookies using an array
  res.setHeader("Set-Cookie", [
    "login=true",
    `name=${userName}`
  ]);
console.log(req.body);
  res.render("Profile");
});

app.get("/", (req, res) => {
  // Read raw cookie header
  const cookieData = req.get("cookie");  // or req.headers.cookie
  console.log("Cookie header:", cookieData);

  res.send("<h1>Welcome to home page</h1>");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
