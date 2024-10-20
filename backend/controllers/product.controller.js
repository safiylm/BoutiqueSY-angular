const db = require('../config/db.config.js')
const collection_products = db.collection('products');
const Product = require('../model/product.js')
const ObjectId = require('mongodb').ObjectId;

// Retrieve all Products from the database.
exports.getAll = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_products.find().toArray());
}

exports.getProductById = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_products.findOne({ "_id": new ObjectId(req.query.id) }));
}

exports.getProductsByCategorie = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_products.find({ "categorie": req.query.categorie }).toArray());
}