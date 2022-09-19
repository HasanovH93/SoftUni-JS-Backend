const data = [
    {
        id: "asdf1234",
        name: "windshield Wiper",
        price: 49.5
    },
    {
        id: "asdf1235",
        name: 'Headlight Bulb',
        price: 12.90
    }
]

function getList(){
    return data;
}

function getById(id){
    return data.filter(p => p.id == id)
}

module.exports = {
    getList,
    getById,
}