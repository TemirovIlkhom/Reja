console.log("Wab serverni boshlash");
const express = require("express"); // expressni chaqirib olyapmiz
const res = require("express/lib/response") 
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
const mongodb = require("mongodb");


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
  console.log("user entered /create-item");
    console.log( req.body );
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
      // console.log(data.ops);
     res.json(data.ops[0]);
    });
});

app.post("/delete-item", function (req, res) {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id)}, 
  function(err, data) {
    res.json({state: "success"});
  });
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
    {$set: {reja: data.new_input}},
     ( err, data) => {
      res.json({state: "success"});
    }
  );
})

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany( function () {
      res.json({ state: "Hamma rejalar o'chirildi" });
    });
  }
});

app.get("/author", (req, res) => {
  res.render("author", {user: user});
});

app.get("/", (req, res) => {
  console.log("user entered /");
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("something went wrong");
    } else {
      res.render("reja", {items: data});
    }      
  })       
});



module.exports = app;