var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

var port = process.argv.length > 2 ? parseInt(process.argv[2]) : undefined;
if (!isNaN(port)) {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
}