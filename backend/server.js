const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//load environment variables
dotenv.config();

//Initialize express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Connect to mongodb
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB connection established successfully');
});

//start server
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});