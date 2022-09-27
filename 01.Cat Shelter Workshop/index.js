const http = require("http");
const fs = require("fs");
const formidable = require("formidable");
const storageService = require("./services/storageService");
const db = require("./db.json");

const app = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      if (req.method == "GET") {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        fs.readFile("./views/home/index.html", "utf8", (err, layout) => {
          if (err) {
            res.statusCode = 404;
            return res.end();
          }
          const addCats = db.cats
          const allCats = addCats.map(
            (cat) => ` 
            <li>
                <img src="${cat.upload}" alt="Black Cat">
                <h3>${cat.name}</h3>
                <p><span>Breed: </span>${cat.breed}</p>
                <p><span>Description: </span>${cat.description}</p>
                <ul class="buttons">
                    <li class="btn edit"><a href="">Change Info</a></li>
                    <li class="btn delete"><a href="">New Home</a></li>
                </ul>
            </li>`
          );
          layout = layout.replace('{{{allCats}}}', allCats)

          res.write(layout);
          res.end();
        });
        break;
      }
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
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        fs.readFile("./views/addCat.html", "utf8", (err, result) => {
          if (err) {
            res.statusCode = 404;
            return res.end();
          }
          const addBreeds = db.breeds;
          const allBreeds = addBreeds.map(
            (a) => `<option value="${a.breed}">${a.breed}</option>`
          );
          result = result.replace("{{{breeds}}}", allBreeds);
          res.write(result);
          res.end();
        });
        break;
      } else if (req.method == "POST") {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
          fields.upload = files.upload.filepath;
          console.log(files.upload)
          storageService.saveData(fields);
        });
        res.writeHead(302, {
          location: "/",
        });
        res.end();
      }

      break;
    case "/cats/add-breed":
      if (req.method == "GET") {
        const breedCat = fs.readFileSync("./views/addBreed.html");
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.write(breedCat);
        res.end();
      } else if (req.method == "POST") {
        let breedForm = new formidable.IncomingForm();
        breedForm.parse(req, (err, fields, files) => {
          storageService.saveBreed(fields);
        });
        res.writeHead(302, {
          location: "/",
        });
        res.end();
      }

    default:
      res.statusCode = 404;
      res.end();
      break;
  }
});

app.listen(5000);

console.log("App is running....");
