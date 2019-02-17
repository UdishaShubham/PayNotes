const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, requires: true}
});

module.exports = mongoose.model('Users', usersSchema);
