var express = require("express");
var path = require('path');
var fs = require('fs');
const { Console } = require("console");
const { OpenAI } = require("openai");
const sqlite3 = require("sqlite3").verbose();
const cookieParser = require('cookie-parser');
const { request } = require("http");

var router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());

const openai = new OpenAI({
    apiKey: "5726c858e2714ce19c27c994ec7da7f4",
    baseURL: "https://api.aimlapi.com",
});

let db = new sqlite3.Database("databases/GAMES.db", (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the games database.');
});

router.get("/", function (req, res) {
    const y = req.ip;
    res.cookie('choice', "XBOX");
    res.render("index");
});

router.post("/roll", async (req, res) => {
    const genchoice = req.body.genre;
    //console.log(genchoice)
    //var cookie = req.headers.cookie;
    //var arrcook = cookie.split('; ');
    //var choice = 'XBOX';
    //arrcook.forEach(c => {
       // if (c.includes('choice')) {
           // choice = c.slice(7);
      //  }
  //  });
   // console.log(choice);

   // try {
   //     let sql = "SELECT * FROM " + choice + " WHERE genre LIKE ?";
   //     const rows = await new Promise((resolve, reject) => {
      //      db.all(sql, [`%${genchoice}%`], (err, rows) => {
    //            if (err) return reject(err);
        //        resolve(rows);
       //     });
     //   });

     //   if (rows.length > 0) {
      //      var r = Math.floor(Math.random() * rows.length);
        //    var result = rows[r].name;
//
        //    const chatCompletion = await openai.chat.completions.create({
         //       model: "mistralai/Mistral-7B-Instruct-v0.2",
           //     messages: [
         //           { role: "system", content: "You are a video game expert." },
           //         { role: "user", content: "Give me a very short description of the video game " + result }
           //     ],
           //     temperature: 0.7,
           //     max_tokens: 128,
          //  });

         //   console.log("AI/ML API:\n", chatCompletion.choices[0].message.content);
      //  } else {
      //      console.log("No games found for the selected genre.");
      //  }
   // } catch (err) {
 //       console.error(err.message);
   // }
   Gname.innerHTML = genchoice;
});

router.get("/x", function (req, res) {
    res.clearCookie('choice');
    res.cookie('choice', "XBOX");
    res.render('index');
});
router.get("/ps", function (req, res) {
    res.clearCookie('choice');
    res.cookie('choice', "PS4");
    res.render('index');
});
router.get("/ns", function (req, res) {
    res.clearCookie('choice');
    res.cookie('choice', "NINTENDO");
    res.render('index');
});
router.get("/s", function (req, res) {
    res.clearCookie('choice');
    res.cookie('choice', "STEAM");
    res.render('index');
});

module.exports = router;