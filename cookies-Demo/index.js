const app = require('express')();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req,res) => {
    console.log(req.cookies);
    res.cookie('cookieparser', 1)
    res.cookie('multiple cookies', 'abc')
    res.send('Hello')
})

app.listen(3000)