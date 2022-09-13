const { IncomingForm } = require("formidable");
const { html, data } = require("../util");

function catalogPage(req, res) {
  res.write(
    html(
      `<h1>Catalog<h2>
     <p>List of Items<p>
     <ul>
     ${data.map((i) => `<li>${i.name} - ${i.color}</li>`).join(" ")} 
     </ul>`,
      "Catalog"
    )
  );
  res.end();
}

function createPage(req, res) {
  res.write(
    html(
      `
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
    </form>`,
      "Create New Item"
    )
  );
  res.end();
}

function createItem(req, res) {
  //handle POST request
  console.log(`create request`);
  const form = new IncomingForm();

  form.parse(req, (err, fields) => {
    const item = {
      id: ("asdf0000" + (Math.random() * 9999 | 0)).slice(0,8),
      name: fields.name,
      color: fields.color
    };
    data.push(item)
  });
  res.end();
}

module.exports = {
  catalogPage,
  createPage,
  createItem,
};
