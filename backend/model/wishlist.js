var mongoose = require('mongoose');

const Wishlist = new mongoose.Schema({

    userId: { type: String },
    productId:{ type: String },
    size:{type: String},

}, 
{ versionKey: false });
mongoose.model('Wishlist', Wishlist);

module.exports = Wishlist;