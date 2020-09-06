const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const galleryRoutes = require('./api/routes/gallery');

const questionsheetRoutes = require('./api/routes/questionsheet');

const app = express();

app.use('/uploads',express.static('uploads'));
app.use('/image', express.static('image'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === 'OPTIONS') {
//         res.header("Access-Control-Allow-Methods", "GET< POST< PUT< PATCH< DELETE");
//         return res.status(200).json({});
//     }
//     next();
// })

app.use('/gallery', galleryRoutes);
app.use('/questionsheet', questionsheetRoutes);


mongoose.connect('mongodb+srv://coka:' + process.env.MONGODB_URI + '@cluster0-fjklc.mongodb.net/kitchen?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}, err => err ? console.log(err) : console.log('Connected to database'));

module.exports = app;