const { addNewVisitor, createTable } = require("./database");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const pug = require("pug");

//serving a static file
app.use("/", express.static(__dirname + "/"));

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//pug
app.set("view engine", "pug");

//Set static folder
app.get("/new_visitor", function(req, res) {
  res.sendFile(path.join(__dirname + "/form.html"));
});

createTable();

app.post("/new_visit", function(req, res) {
  let name = req.body.visitor_name;
  let ass_name = req.body.assistant_name;
  let age = req.body.visitor_age;
  let date = req.body.date;
  let time = req.body.time;
  let comment = req.body.comment;

  addNewVisitor(name, ass_name, age, date, time, comment);
  res.render("newVisitor", {
      name: req.body.visitor_name,
      ass_name: req.body.assistant_name,
      age: req.body.visitor_age,
      date: req.body.date,
      time: req.body.time,
      comment: req.body.comment
  
  });
  res.end();
});

const port = 3001;
app.listen(port);

console.log(`Server connected to port: ${port}`);

module.exports = port;
