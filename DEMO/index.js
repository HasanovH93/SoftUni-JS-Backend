const http = require("http");

const homePage = `
    <h1>Home Page</h1>
    <p>Welcome to our Site</p>
`;

const aboutPage = `
    <h1>About us</h1>
    <p>Contact: +1-555-1973<p>
`;
const defaultPage = `  <h1>404 Not found</h1>
<p>The recourse you're requested does not exist<p>`;

const catalogPage = `
<h1>Catalog<h2>
<p>List of Items<p>
`

const routes = {
  "/": homePage,
  "/about": aboutPage,
  '/catalog': catalogPage,
};

const server = http.createServer((request, response) => {
  console.log("Request received!");
  console.log(">>>", request.method, request.url);

  const url = new URL(request.url, `http://${request.headers.host}`);
  console.log(url);

  const page = routes[url.pathname];
  if (page != undefined) {
    response.write(html(page));
    response.end();
  } else {
    response.statusCode = 404;
    response.write(html(defaultPage));
    response.end();
  }
});

function html(body) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
       </head>
    <body>
    <ul>
    <li><a href="/">Home<a></li>
    <li><a href="/about">About<a></li>
    </ul>
    
    
       ${body}
    </body>
    </html>`;
}

server.listen(3000);
