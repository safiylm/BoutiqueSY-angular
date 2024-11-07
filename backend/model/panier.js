var mongoose = require('mongoose');

const Panier = new mongoose.Schema({

    userId: { type: String },
    productId:{ type: String },
    quantity:{type: Number},
    size:{type: String},

}, 
{ versionKey: false });
mongoose.model('Panier', Panier);

module.exports = Panier;