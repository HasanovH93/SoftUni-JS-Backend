const http = require('http')

const server = http.createServer((req,res) => {
        res.write('OK')
        res.end()
})

server.listen(3000)