const mongoose = require('mongoose'); // Import mongoose
const express = require('express'); //import express
const feedRoutes = require('./routes/feed'); // Import feed routes
const app = express(); // create the express app
app.use(express.json()); //to parse incoming JSON data

PORT = 5000

app.use('/feed', feedRoutes);
mongoose
.connect('mongodb+srv://Poltanek:<QgjQpUGRzs54Laa4>@mern-app.p6koe.mongodb.net/?retryWrites=true&w=majority&appName=MERN-App')
.then(result => {
  app.listen(PORT)
})
.catch(err => console.log('err', err))