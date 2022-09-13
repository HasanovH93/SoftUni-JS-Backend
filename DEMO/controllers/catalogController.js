
const { html } = require('../util');


function catalogPage(req, res) {
    res.write(html(`<h1>Catalog<h2>
     <p>List of Items<p>`,'Catalog'));
    res.end();
}

module.exports = {
    catalogPage,
}