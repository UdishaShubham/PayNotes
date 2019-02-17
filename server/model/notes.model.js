const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let notesSchema = new Schema({
    name: {type: String, required: true, max:100},
    content: {type: String, requires: true}
});

module.exports = mongoose.model('Notes', notesSchema);
