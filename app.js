const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
var items = [];
app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US", options);
//  console.log(day);

  res.render("list", {
    day: day,
    items: items
  });
});
app.post("/", function(req, res){
  var item = req.body.newTask;
  items.push(item);
  res.redirect("/");

})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
