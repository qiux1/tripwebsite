const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const City = require('./models/city');

//load environment variables
dotenv.config();

//Initialize express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'));

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

app.get('/api/cities', async (req, res) =>{
    try{
        const cities = await City.find({});
        res.json(cities);
    } catch (error){
        res.status(500).json({ message: 'Error retrieving city data'});
    }
});

//start server
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});