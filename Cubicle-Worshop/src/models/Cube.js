const uniqid = require('uniqid')

class Cube {
  static #cubes = [
    { 
      id: "asd2003dfgdfg",
      name: "Mirror Cube",
      description: undefined,
      imgUrl: "https://m.media-amazon.com/images/I/41KNQRXAYvL._AC_.jpg",
      difficulty: "4",
    },
    {
        id: 'z3qy7mtsl8kffddf',
        name: 'Ice Cube',
        description: undefined,
        imgUrl: 'https://c.nau.ch/i/rbaMn/1024/ice-cube.jpg',
        difficulty: '1'
      },
      {
        id: 'z3qy7facl8khm2ax',
        name: 'Cute Cube',
        description: undefined,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdc3Jrxu1Qq1Ews5YnqHLHnpx-UMKoszMJOylQSHk&s',
        difficulty: '1'
      }
  ];
  constructor(name, description, imgUrl, difficulty) {
      this.id = uniqid();
      this.name = name;
      this.description = description;
      this.imgUrl = imgUrl;
      this.difficulty = difficulty;
  }

  static get cubes(){
    return Cube.#cubes.slice()
  }

  static add(cube) {
    Cube.#cubes.push(cube)
  }
}

module.exports = Cube;
