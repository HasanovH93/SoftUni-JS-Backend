const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const path = fs.readFileSync("./views/home/index.html");
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.write(path);
      break;
   
      case '/cats/add-breed':
        const catBreed = fs.readFileSync('./views/addBreed.html')
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(catBreed)
        break;
        case "/styles/site.css":
            const cssPath = fs.readFileSync('./styles/site.css');
            res.writeHead(200, {
              'Content-Type': "text/css"
            });
            res.write(cssPath)
    default:
      res.statusCode = 404;
      break;
  }
  res.end();
});

app.listen(5000);

console.log("App is running....");
