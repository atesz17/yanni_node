var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    password: String,
    role: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;