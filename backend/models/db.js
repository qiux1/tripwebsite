require('dotenv').config();
const mongoose = require('mongoose');
const City = require('./models/City');

const Data = [
    {
        id: 1,
        imgSrc:"/images/Shanghai.jpg",
        destTitle: 'Shanghai',
        country: 'China',
        description:'Shanghai, a vibrant Chinese metropolis, boasts futuristic skyscrapers, rich history, bustling markets, diverse cuisine, and a unique fusion of East-meets-West culture. '
    },

    {
        id: 2,
        imgSrc: "/images/Chongqing.jpg",
        destTitle: 'Chongqing',
        country: 'China',
        description:'Chongqing, a sprawling Chinese city, features steep hills, a foggy skyline, spicy Sichuan cuisine, intriguing history, and the impressive Yangtze River.'
    },
    
    {
        id: 3,
        imgSrc:'/images/Paris.jpg',
        destTitle: 'Paris',
        country: 'France',
        description:'Paris, the capital of France, is a city renowned for its stunning architecture, rich history, delicious cuisine, and romantic ambiance.'
    },
    
    {
        id: 4,
        imgSrc:"/images/London.jpg",
        destTitle: 'London',
        country: 'England',
        description:'London, the capital of England, is a diverse and vibrant city, famous for its iconic landmarks, museums, theaters, and bustling streets.'
    },
    
    {
        id: 5,
        imgSrc:"/images/NewYork.jpg",
        destTitle: 'NewYork',
        country: 'USA',
        description:'New York City, the largest city in the United States, is a global hub of culture, finance, fashion, and entertainment.'
    },
    
    {
        id: 6,
        imgSrc:"/images/Tokyo.jpg",
        destTitle: 'Tokyo',
        country: 'Japan',
        description:'Tokyo is a vibrant and bustling metropolis in Japan, known for its neon lights, cutting-edge technology, and rich cultural traditions.'
    },
]

const insertData = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected.');

        //clear the colletions before inserting new data
        await City.deleteMany({});

        //Insert the data
        await City.insertMany(Data);

        console.log("Data inserted successfully");

    } catch (error) {
        console.error('Error:', error);
    } finally {
        //close connection
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    }
};

insertData();
