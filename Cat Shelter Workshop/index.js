const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const storageService = require("./services/storageService");

const app = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const index = fs.readFileSync("./views/home/index.html");
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(index);
      res.end();
      break;

    case "/cats/add-breed":
      const catBreed = fs.readFileSync("./views/addBreed.html");
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(catBreed);
      res.end();
      break;
    case "/styles/site.css":
      const css = fs.readFileSync("./styles/site.css");
      res.writeHead(200, {
        "Content-Type": "text/css",
      });
      res.write(css);
      res.end();
      break;
    case "/js/script.js":
      let js = fs.readFileSync("./js/script.js");
      res.writeHead(200, {
        "Content-Type": "text/javascript",
      });
      res.write(js);
      res.end();
      break;
    case "/cats/add-cat":
      if (req.method == "GET") {
        console.log("GET");
        const addCat = fs.readFileSync("./views/addCat.html");
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.write(addCat);
        res.end();
      } else if (req.method == "POST") {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
          console.log(fields);
          console.log(files);
          storageService.saveData(fields);
        });
        res.end();
      }

      break;
    default:
      res.statusCode = 404;
      res.end();
      break;
  }
});

app.listen(5000);

console.log("App is running....");
