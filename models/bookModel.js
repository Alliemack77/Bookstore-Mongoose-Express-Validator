// book Schema and Model 
// require Mongoose
const mongoose = require('mongoose');

// create Schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: Number,
}, {collection: 'bookStoreData'});

// compile to model
const BookModel = mongoose.model('BookModel', bookSchema);

module.exports = BookModel;