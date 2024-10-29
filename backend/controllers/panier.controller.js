const db = require('../config/db.config.js')
const collection_panier = db.collection('paniers');
const Panier = require('../model/panier.js')
const ObjectId = require('mongodb').ObjectId;

// Retrieve all Products from the database.
exports.getAll = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_panier.find().toArray());
}

exports.getByUserId = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_panier.find({ "userId": req.query.userId }).toArray());
}

exports.getByProductId = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_panier.findOne({ "productId": req.query.productId }));
}

exports.remove = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(collection_panier
    .deleteOne({ "productId": req.body.id }));

}

exports.add = async (req, res) => {
  const panier = {
    userId: req.body.userId,
    productId: req.body.productId,
    quantity: req.body.quantity,
    size: req.body.size,
  }

  res.set('Access-Control-Allow-Origin', '*');

  // Save  in the database
  collection_panier
    .insertOne(panier)
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