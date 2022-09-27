const express = require('express');

const app = express();

app.all('/', (req, res) => {
    res.write('It\'s working');
    res.end()
});

app.listen(3000, () => {
  console.log('Server listening on port 3000....')
})