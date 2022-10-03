const app = require('express')();
const cookieParser = require('cookie-parser');
const session = require('express-session')

app.use(cookieParser());
app.use(session({
    secret: 'my secret code',
    saveUninitialized: true,
    resave: false,
    cookie: {secure: true}
}))

app.get('/', (req,res) => {
  console.log(req.session);
    req.session.message = 'hello'
    res.send('Hello')
})

app.listen(3000)