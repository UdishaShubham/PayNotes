const express = require("express");
const router = express.Router();
const Notes = require("../model/notes.model");

router.get("/", function (req, res) {
    Notes.find(function (err, response) {
        if (err) {
            throw(err);
        }
        res.send(response);
    })
})

module.exports = router;