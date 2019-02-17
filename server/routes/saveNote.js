const express = require("express");
const router = express.Router();
const Notes = require("../model/notes.model");

router.put("/", function (req, res) {
    Notes.findByIdAndUpdate(req.body.id,
        {
            name: req.body.name,
            content: req.body.content
        },
        function (err, response) {
            if (err) {
                throw(err);
            }
            res.send(response);
        })
})

module.exports = router;