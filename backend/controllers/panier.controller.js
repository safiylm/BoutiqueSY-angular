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

exports.add = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
}

exports.remove = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
}

exports.create= async (req, res) =>{
  const panier = {
    userId: "671f5bb98f79cd2b1be4fc13",
    productId:"6715171d0cd8956d07a3be0f",
    quantity:2,
    size: ["34"],
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