const   fs  = require("fs");
 
const result = fs.readdirSync(".");
const output = []
for (let item of result) {
  if (fs.statSync(`./${item}`).isDirectory()) {
   output.push(item, "is a Directory");
  } else {
    output.push(item, "Is  a File");
  }
}

fs.writeFileSync('./summary.txt',output.join('\n'), "utf-8")


