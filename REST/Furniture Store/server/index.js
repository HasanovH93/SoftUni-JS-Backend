const express = require('express');
const cors = require('./middlewares/cors');

const app = express();

app.use(express.json());
app.use(cors());