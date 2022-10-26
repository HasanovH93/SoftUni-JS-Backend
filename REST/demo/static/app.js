document.getElementById("loadProducts").addEventListener("click", loadProducts);
const form = document.querySelector("form");
form.addEventListener("submit", createProduct);
const list = document.querySelector("ul");
list.addEventListener("click", itemAction);

let editMode = false;
let currId = null;

async function loadProducts() {
  const res = await fetch("http://localhost:3000/data");
  const data = await res.json();

  list.replaceChildren();

  for (let item of data) {
    createRow(item);
  }
}

function createRow(item) {
  const li = document.createElement("li");
  li.id = item.id;
  li.textContent = `${item.name} - $ ${item.price} `;

  createAction(li, "[DELETE]", "delete");
  createAction(li, "[EDIT]", "edit");
}

function createAction(li, label, className) {
  const btn = document.createElement("a");
  btn.textContent = label;
  btn.className = className;
  btn.href = "javascript:void(0)";
  li.appendChild(btn);

  list.appendChild(li);
}

async function createProduct(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (editMode) {
    const res = await fetch("http://localhost:3000/data/" + currId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      loadProducts();
      form.reset();
      editMode = false;
      currId = null;
    }
  } else {
    const res = await fetch("http://localhost:3000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const item = await res.json();
    createRow(item);
  }
}

async function itemAction(event) {
  if (event.target.tagName == "A") {
    event.preventDefault();
    const id = event.target.parentNode.id;
    if (event.target.className == "delete") {
      deleteItem(id);
    } else if (event.target.className == "edit") {
      edit(id);
    }
  }
}

async function details(id) {
  const res = await fetch("http://localhost:3000/data/" + id);
  const data = await res.json();
  return data;
}

async function deleteItem(id) {
  const res = await fetch("http://localhost:3000/data/" + id, {
    method: "delete",
  });
  if (res.ok) {
    document.getElementById(id).remove();
  }
}

async function edit(id) {
  const item = await details(id);

  form.querySelector('[name="name"]').value = item.name;
  form.querySelector('[name="price"]').value = item.price;
  editMode = true;
  currId = id;
}
