const Cube = require("../models/Cube");


const getall = () => Cube.cubes


const create = (name,description,imgUrl,difficulty) => {
      
    let cube = new Cube(name,description,imgUrl,difficulty);
    Cube.add(cube)
};

const cubeService = {
    getall,
    create,
   
};

module.exports = cubeService