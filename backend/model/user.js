var mongoose = require('mongoose');

const User = new mongoose.Schema({

    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNo : {type: Number}
},
    { versionKey: false }
);
mongoose.model('User', User);

module.exports = User;