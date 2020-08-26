const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    picture: { type: String },
    date: { type: String },
    title: { type: String, required: true },
    desc: { type: String, required: true }
});

module.exports = mongoose.model('Blog', blogSchema)