//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var items = ["Activity 1","Activity 2"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  var today = new Date();

  var option ={
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", option);

  res.render("list", {kindOfDay : day, newListItems: items });
});

app.post("/", function(req, res){
  item = req.body.newItem;

  items.push(item);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server is running on Port 3000");
});
