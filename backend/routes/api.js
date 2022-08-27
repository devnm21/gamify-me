const express = require('express');
const authRouter = require('./auth');

const app = express();

app.use('/users/', authRouter);

module.exports = app;
