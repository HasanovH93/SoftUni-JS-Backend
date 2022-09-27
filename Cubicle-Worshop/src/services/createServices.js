const Cube = require("../models/Cube");


const getall = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(x => x.id == id)


const create = (name,description,imgUrl,difficulty) => {
      
    let cube = new Cube(name,description,imgUrl,difficulty);
    Cube.add(cube)
};

const cubeService = {
    getall,
    create,
    getOne,
   
};

module.exports = cubeService