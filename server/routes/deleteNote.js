const express = require("express");
const router = express.Router();
const Notes = require("../model/notes.model");

router.delete("/:id", function (req, res) {
    Notes.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            throw(err);
        }
        res.send({message: "success"});
    })
})

module.exports = router;