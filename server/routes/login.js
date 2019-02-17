const express = require("express");
const router = express.Router();
const Users = require("../model/users.model");

router.post("/", function (req, res) {
    Users.find({
        username: req.body.username,
        password: req.body.password
    }, function (err, response) {
        if (err) {
            throw(err);
        }
        if (response.length === 0) {
            res.status(404).send({error: "user not found"});
        } else {
            res.send(response);
        }
    })
})

module.exports = router;