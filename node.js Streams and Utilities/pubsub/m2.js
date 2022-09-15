const { publush } = require('./observer')

let counter = 0;

setInterval(() => {
    publush(counter)
    counter++
}, 2000)