const express = require("express");
const router = express.Router();
const Notes = require("../model/notes.model");

router.post('/', function(req, res) {
    let note = new Notes(
        {
            name: req.body.name,
            content: req.body.content
        }
    );

    note.save(function (err, response) {
        if (err) {
            throw(err);
        }
        res.send(response);
    })
})

module.exports = router;