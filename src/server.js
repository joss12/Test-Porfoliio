const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const exphbs = require('express-handlebars')
const path = require("path");
const AppRout = require('./router/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.use(express.static(__dirname + '/public'));

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs.engine({
    extname:".hbs",
    defaultLayout: false,
    helpers:  require('./helpers')
}));
app.set("view engine", ".hbs");


app.use('/', AppRout);

module.exports = app;
