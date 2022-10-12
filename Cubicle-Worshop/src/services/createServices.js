const Cube = require("../models/Cube");


const getall = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById({id}).lean()


const create = (name,description,imgUrl,difficulty) => {
      
    let cube = new Cube({
        name,
        description,
        imgUrl,
        difficulty

    });
   return cube.save()
};

const cubeService = {
    getall,
    create,
    getOne,
   
};

module.exports = cubeService