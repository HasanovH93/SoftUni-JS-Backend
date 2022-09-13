const { html } = require('../util');

function homePage(req, res) {
    res.write(html(`<h1>Home Page</h1>
     <p>Welcome to our Site</p>`));
    res.end();
}

function aboutPage(req, res) {
    res.write(html(`<h1>About us</h1>
     <p>Contact: +1-555-1973<p>`));
    res.end();
}

function defaultPage(req, res) {
    res.statusCode = 404;
    res.write(html(`<h1>404 Not found</h1>
     <p>The recourse you're requested does not exist<p>`));
    res.end();
}

module.exports = {
    homePage,
    aboutPage,
    defaultPage,
}