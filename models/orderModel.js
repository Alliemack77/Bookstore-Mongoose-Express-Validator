// Order Schema and Model
const mongoose = require('mongoose');

// create Schema
const orderSchema = new mongoose.Schema({
    item: String, 
    price: Number,  
    quantity: Number
}, {collection: 'bookStoreData'});

// compile to model
const OrderModel = mongoose.model('OrderModel', orderSchema);

module.exports = OrderModel;