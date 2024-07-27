var express = require("express");
var path = require('path');
var fs = require('fs');
const { Console } = require("console");

var router = express.Router();
router.use(express.urlencoded({ extended: true }));
var choice = "x";


router.get("/",function(req,res){
    res.render("index");
    console.log("webpage loaded");
});

router.post("/roll",(req,res) =>{
    console.log(choice);
    const genchoice = req.body.genre;
});
router.get("/x",function(req,res){
    choice = 'x';  
});
router.get("/ps",function(req,res){
    choice = "ps";  
});
router.get("/ns",function(req,res){
    choice = "ns";
});
router.get("/s",function(req,res){
    console.log("hi");
    choice = "s"; 
});

module.exports = router;
