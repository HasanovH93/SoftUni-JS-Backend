const   fs  = require("fs");

const result = fs.readdirSync(".");
for (let item of result) {
  if (fs.statSync(`./${item}`).isDirectory()) {
    console.log(item, "is a Directory");
  } else {
    console.log(item, "Is  a File");
  }
}


