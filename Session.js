import express from 'express';
import session from 'express-session';
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.render("Login"); // Login.ejs
});

app.post("/profile", (req, res) => {
  req.session.data=req.body;
  console.log(req.session.data);


  
  res.render("Profile");
});

app.get("/", (req, res) => {
  
  const data=req.session.data;
  console.log(data);
  

  res.render("home",{data:req.session.data});
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
