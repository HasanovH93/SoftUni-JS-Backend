const Cube = require("../models/Cube");

const search = (text, from, to) => {
  let result = Cube.cubes;

  if (text) {
    result = result.filter((x) =>
      x.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  if (from) {
    result = result.filter((x) => x.difficulty >= from);
  }
  if (to) {
    result = result.filter((x) => x.difficulty <= to);
  }

  return result;
};

module.exports = {
  search,
};
