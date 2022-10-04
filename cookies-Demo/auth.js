const crypto = require("crypto");
const express = require("express");
const session = require("express-session");
const {register,login, users} = require('./userService')

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
    secret: "asdsadasdsa",
  })
);

const homeTemplate = (user,users) => `<h1>Welcome, ${user || 'guest'}</h1>
${user == undefined ? '<p>Please login: <a href="/login">login here</a>. If you dont have an account, <a href="/register">please register<a/>.' : ''}
<ul>
${users && users.map(u => `<li>${u.username}</li>`).join('\n')}
</ul>`;

app.get("/", (req, res) => {
  console.log(">>> User: " + (req.session.user || "guest"));
  res.send(homeTemplate(req.session.user, users))
});

app.get("/login", (req, res) => {
  res.send(`<h1>Login</h1>
  <form action="/login" method="post">
       <label>Username: <input type="text" name="username"></label>
      <label>Password: <input type="password" name="password"></label>
      <input type="submit" value="Log in">
       </form>`);
});

const registerTemplate = (error) => `<h1>Register</h1>
${error ? `<p>${error}</p>` : ""}
<form action="/register" method="post">
<label>Username: <input type="text" name="username"></label>
<label>Password: <input type="password" name="password"></label>
<label>Repeat: <input type="password" name="repass"></label>
<input type="submit" value="Sign Up">
</form>`;

app.get("/register", (req, res) => {
    console.log(users)
  res.send(registerTemplate());
});

app.post("/register",  async (req, res) => {

    try {
        if (req.body.username == "" || req.body.password == "") {
          throw new Error("All fields are required");
          } else if (req.body.password != req.body.repass) {
           throw new Error("Password dont match!");
          }
    } catch (err) {
        res.send(registerTemplate(err.message))
    }
   
    await register(req.body.username,req.body.password);
    res.redirect('/login')
  
});

app.post("/login", async  (req, res) => {
  console.log("Login attempt");

  if (await login(req.body.username, req.body.password)) {
    req.session.user = req.body.username;
    res.redirect("/");
  } else {
    res.status(401).send("Incorrect username or password");
  }
});

app.listen(3000);
