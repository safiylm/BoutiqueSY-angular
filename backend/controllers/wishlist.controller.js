const db = require('../config/db.config.js')
const collection_wishlist= db.collection('wishlists');
const Wishlist = require('../model/wishlist.js')
const ObjectId = require('mongodb').ObjectId;

// Retrieve all Products from the database.
exports.getAll = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_wishlist.find().toArray());
}

exports.getByUserId = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(await collection_wishlist.find({ "userId":req.query.userId }).toArray());
}

exports.add = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
}

exports.remove = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
}

exports.create= async (req, res) =>{
  
  const wishlist_ = {
    userId: "671f5bb98f79cd2b1be4fc13",
    productId:"6715171d0cd8956d07a3be0f",
    size: ["34"],
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