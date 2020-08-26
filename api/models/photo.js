const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image: { type: String },
    date: {type: String}
});

module.exports = mongoose.model('Photo', photoSchema)
