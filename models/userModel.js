const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: Number,
}, {collection: 'bookStoreData'});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;

