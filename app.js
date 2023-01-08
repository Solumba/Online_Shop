const express = require('express');
const morgan = require('morgan');
const productsRouter = require('./routes/productsRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/products', productsRouter);

module.exports = app;
