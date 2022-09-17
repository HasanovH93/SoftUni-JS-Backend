const fs = require('fs')

function homePage(req,res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.createReadStream('./static/index.html').pipe(res)
    res.write('Home Page')
    res.end()
       
}

function sendFile(req,res){
    res.write('Static File')
    res.end()
}

module.exports = {
    homePage,
    sendFile
}