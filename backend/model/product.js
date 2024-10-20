var mongoose = require('mongoose');


const Product = new mongoose.Schema({

    name: { type: String },
    categorie: { type: String },
    color: { type: [String] },
    image: { type: [String] },
    prix: { type: Number },
    size: { type: [String] },
    detail: { type: String },
    description: { type: String },
    material: { type: String },

}, 
{ versionKey: false });
mongoose.model('Product', Product);

module.exports = Product;