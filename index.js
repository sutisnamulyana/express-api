//config
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const { json } = bodyParser;
const { port } = require('./config/server');
const mainRoutes = require('./api/index');

//health check endpoint
app.get('/', (req, res) => {
    res.send('The server is listening')
})

// use json
app.use(json());

// main routes

app.use('/api', mainRoutes);

//setup server
app.listen(port, () => {
    console.log(`Express app is listening at http://localhost:${port}`)
})