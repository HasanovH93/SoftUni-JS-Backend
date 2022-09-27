const   fs  = require("fs");
 
const stream = fs.createReadStream('./summary.txt', {
    highWaterMark: 3
})

const file = []

stream.on('data',chunk => {
    console.log(chunk.toString());
    file.push(chunk)
});

stream.on('end', () =>{
    console.log('File Compiled')
    console.log(file.join(''))
})


