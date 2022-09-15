const fs = require('fs')

const text = fs.readFile('./node.js Streams and Utilities/pubsub/demo.txt', (err,data) => {
    if (err != null){
      return  console.error(err.message)
    }
    console.log(data.toString())
})
