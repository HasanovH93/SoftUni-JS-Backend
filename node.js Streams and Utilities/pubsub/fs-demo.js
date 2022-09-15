const { promises: fs } = require('fs')
start()
async function start(){

   const data = await fs.readFile('./node.js Streams and Utilities/pubsub/demo.txt')
   console.log(data.toString())
}

