var express = require("express");


var router = express.Router();

var choice = "x";

router.get("/",function(req,res){
    res.render("index");
    console.log("webpage loaded");
});

router.post("/roll",function(req,res){
    console.log(choice);
    res.render("index");
});
router.post("/x",function(req,res){
    console.log("hi");
    choice = "x";
    res.render("index");
});
router.post("/ps",function(req,res){
    console.log("hi");
    choice = "ps";
    res.render("index");
});
router.post("/ns",function(req,res){
    console.log("hi");
    choice = "ns";
    res.render("index");
});
router.post("/s",function(req,res){
    console.log("hi");
    choice = "s";
    res.render("index");
});
module.exports = router;
