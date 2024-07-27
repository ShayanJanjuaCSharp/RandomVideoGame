var express = require("express");
var path = require("path");
var routes = require("./routes");
var constants = require("./constants/constants");

var app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", __dirname);
app.set("view engine", "ejs");
app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server Started on port " + app.get("port"));
});