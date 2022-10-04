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

const homeTemplate = (user,users, isAdmin) => `<h1>Welcome, ${user || 'guest'}</h1>
${user == undefined ? '<p>Please login: <a href="/login">login here</a>. If you dont have an account, <a href="/register">please register<a/>.' : ''}
${isAdmin ? `<ul>
${users.map(u => `<li>${u.username} - ${u.failedAttempts}</li>`).join('\n')}
</ul>` : ''}`;

app.get("/", (req, res) => {
    let user = {}
    if(req.session.user){

         user = users.find(u => u.username.toLowerCase() == req.session.user.toLowerCase());
    }
  console.log(">>> User: " + (user || "guest"));
  res.send(homeTemplate(user.username, users, (user.role || []).includes('admin')))
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

const loginTemplate = (error) => `<h1>Login</h1>
${error ? `<p>${error}</p>` : ""}
<form action="/login" method="post">
<label>Username: <input type="text" name="username"></label>
<label>Password: <input type="password" name="password"></label>
<input type="submit" value="Sign In">
</form>`;


app.get("/login", (req, res) => {
    res.send(loginTemplate())
  });

app.post("/login", async  (req, res) => {
  console.log("Login attempt");
  try{
   const result = await login(req.body.username,req.body.password)
   req.session.user = result.username;
   res.redirect("/");
  }catch(err){
    res.status(401).send(loginTemplate(err.message))
  }
});

app.get('/getAdmin', (req, res) => {
    const user = users.find(u => u.username.toLowerCase() == req.session.user.toLowerCase());
    console.log(user)
    user.role.push('admin');
    res.redirect('/')
})

app.listen(3000);
