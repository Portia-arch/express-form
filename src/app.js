const { addNewVisitor, createTable } = require('./database')
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

//body parser
app.use(bodyParser.urlencoded({ extended: true }));

//pug
app.use('view engine', 'pug')

//Set static folder
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/form.html'))
});

//serving a static file
app.use('/', express.static(__dirname + '/'))

createTable();

app.post('/new_visitor', function (req, res) {

    let name = req.body.visitor_name;
    let ass_name = req.body.assistant_name;
    let age = req.body.visitor_age;
    let date = req.body.date;
    let time = req.body.time;
    let comment = req.body.comment;

    addNewVisitor(name, ass_name, age, date, time, comment);
    res.send('New visitor added!!!');
    res.render('newVisitor');
    res.end();
    console.log(req.body);
});



const port = 3001;
app.listen(port);

console.log(`Server connected to port: ${port}`);