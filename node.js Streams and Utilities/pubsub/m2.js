const { publush } = require('./observer')

let counter = 0;

setInterval(() => {
    publush('message',counter)
    counter++
}, 2000)