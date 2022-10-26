const express = require('express');

const app = express();

const products = [
    {
        id:'asd1',
        name: "Product 1",
        price: 110
    },
    {   
        id:'asd2',
        name: "Product 2",
        price: 130
    },
    {
        id:'asd3',
        name: "Product 3",
        price: 140
    }
   ];

app.use(express.static('static'));
app.use(express.json());

app.get('/data', (req, res) => {
   res.json(products)
})

app.post('/data', (req, res) => {
    const record = {
        id: Math.random().toString(16).slice(2),
        name: req.body.name,
        price: Number(req.body.price)
    }
   products.push(record)
    res.status(201).json(record);
});

app.get('/data/:id' , (req, res) => {
     const item = products.find(x => x.id == req.params.id);
     res.json(item);
})

app.delete('/data/:id', (req, res) => {
    const itemIndex = products.findIndex(x => x.id == req.params.id);
    products.splice(itemIndex,1);
    res.status(202).end();
})

app.put('/data/:id', (req , res) => {
    const item = products.find(x => x.id == req.params.id);
    item.name = req.body.name;
    item.price = Number(req.body.price);

    res.status(202).end()
})

app.listen(3000)