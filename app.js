console.log("Wab serverni boshlash");
const express = require("express"); // expressni chaqirib olyapmiz
// const res = require("express/lib/response")
const app = express(); // app o'zgaruvchisiga expressni chaqirib oldik (aylantirib oldik express kk bolgan joyda appni ishlatsak boladi)
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  }else {
    user = JSON.parse(data)
  }
}); 

// MongoDB chaqirish
const db = require("./server").db();



// 1: Kirish code
app.use(express.static("public")); // bu folderni ichida css va image/ boladi
app.use(express.json()); // json farmat datani object xolatiga o'girib beradi
app.use(express.urlencoded({ extended: true  })); // bu codeni yozmasak formdan post qilingan narsa kelmaydi yani serverga kiritmaydi

// 2: session code

// 3: Views code        BSSR
app.set("views", "views"); // folderni ko'rsatayapmiz
app.set("view engine", "ejs"); // views engine ejs ekanligini korsatib beryapmiz

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log( req.body );
    res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", {user: user});
});

app.get("/", (req, res) => {
    res.render("reja");
});



module.exports = app;