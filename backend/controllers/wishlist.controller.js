const db = require('../config/db.config.js')
const collection_wishlist = db.collection('wishlists');
const Wishlist = require('../model/wishlist.js')
const ObjectId = require('mongodb').ObjectId;

// Retrieve all Products from the database.
exports.getAll = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_wishlist.find().toArray());
}

exports.getByUserId = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_wishlist.find({ "userId": req.query.userId }).toArray());
}

exports.getByProductId = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_wishlist.findOne({ "productId": req.query.productId }));
}

exports.remove = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(collection_wishlist
    .deleteOne({ "productId": req.body.id }));
}

exports.add = async (req, res) => {

  const wishlist_ = {
    userId: req.body.userId,
    productId: req.body.productId,
    size: req.body.size,
  }
  res.set('Access-Control-Allow-Origin', '*');

  // Save  in the database
  collection_wishlist
    .insertOne(wishlist_)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
}