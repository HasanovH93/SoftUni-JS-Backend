
const { html, data } = require('../util');


function catalogPage(req, res) {
    res.write(html(`<h1>Catalog<h2>
     <p>List of Items<p>
     <ul>
     ${data.map(i => `<li>${i.name} - ${i.color}</li>`).join(' ')} 
     </ul>`, 'Catalog'));
    res.end();
}

function createPage(req,res) {
    res.write(html(`
    <h1>Create Item</h1>
    <form method="post" action="/create">
    <label>Name: <input type="text" name="name"></label>
    <label>Color: <select name="color">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    </select>
    </label>
    <input type='submit' value="Create">
    </form>`, "Create New Item"));
    res.end()
}

function createItem(req,res){
    //handle POST request
}

module.exports = {
    catalogPage,
    createPage,
}