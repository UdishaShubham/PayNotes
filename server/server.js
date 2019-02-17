const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const login = require("./routes/login");
const createNote = require("./routes/createNote");
const saveNote = require("./routes/saveNote");
const fetchNotes = require("./routes/fetchNotes");
const deleteNote = require("./routes/deleteNote");

const app = express();

const port = 3001;
const dev_db_url = "mongodb+srv://paynotes:paynotes@paynotes-ll7bp.mongodb.net/paynotes?retryWrites=true"
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongo DB connection error: "));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/login", login);
app.use("/saveEditedNote", saveNote);
app.use("/createNote", createNote);
app.use("/fetchNotes", fetchNotes);
app.use("/deleteNote", deleteNote);

app.listen(port, function() {
  console.log("server listening at ", port);
})
