const db = require('../config/db.config.js')
const collection_users = db.collection('users');
const User = require('../model/user.js')
const ObjectId = require('mongodb').ObjectId;


exports.signin = async (req, res) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname, 
        email: req.body.email,
        password: req.body.password,
        phoneNo: req.body.phoneNo,
    }

    res.set('Access-Control-Allow-Origin', '*');

    // Save User in the database
    collection_users
        .insertOne(user)
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

exports.login = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Methods', 'GET, POST,  OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.send(await collection_users.findOne({ "email": req.query.email }));
}

exports.getUsers = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(await collection_users.find({}).toArray())
   // res.send(await collection_users.deleteMany({}))
}

exports.getUserById = async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(await collection_users.findOne({ "_id": new ObjectId(req.query.id) }))
   // res.send(await collection_users.deleteMany({}))
}