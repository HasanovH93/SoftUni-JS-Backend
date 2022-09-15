const { promises: fs } = require('fs')
start()
show()
async function start(){

   const data = await fs.readFile('./node.js Streams and Utilities/pubsub/demo.txt')
   console.log(data.toString())
}

async function show(){
    const result = await fs.readdir('./')
    console.log(result)
}

