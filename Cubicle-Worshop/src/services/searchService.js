const Cube = require("../models/Cube")

const search = (text, from, to) => Cube.cubes.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))

module.exports = {
    search
}