const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// require('dotenv').config();

const galleryRoutes = require('./api/routes/gallery');

const blogRoutes = require('./api/routes/blog');

const questionsheetRoutes = require('./api/routes/questionsheet');

const app = express();

app.use('/uploads',express.static('uploads'));
app.use('/blogimages', express.static('blogimages'));
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
app.use('/blog', blogRoutes);
app.use('/questionsheet', questionsheetRoutes);


mongoose.connect('mongodb+srv://coka:Cokapoka123@cluster0-fjklc.mongodb.net/kitchen?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}, err => err ? console.log(err) : console.log('Connected to database'));

module.exports = app;