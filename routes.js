var express = require("express");


var router = express.Router();

router.get("/",function(req,res){
    res.render("index");
    console.log("webpage loaded");
});

router.post("/roll",function(req,res){
    console.log("hi");
});
module.exports = router;
