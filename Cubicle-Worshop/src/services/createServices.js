const Cube = require("../models/Cube");

const cubeDb = [
    {
        name: 'Mirror Cube',
        description: undefined,
        imgUrl: 'https://m.media-amazon.com/images/I/41KNQRXAYvL._AC_.jpg',
        difficulty: '4'
      },
    ]

const getall = () => cubeDb.slice()


const create = (name,description,imgUrl,difficulty) => {
      
    let cube = new Cube(name,description,imgUrl,difficulty);
    cubeDb.push(cube)
};

const cubeService = {
    getall,
    create,
   
};

module.exports = cubeService