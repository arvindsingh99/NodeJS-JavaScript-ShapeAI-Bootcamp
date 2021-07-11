
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;


app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
    var age = (Number(req.body.n1) / 15);
    res.send("Your Age in Dog Years is : " + age + "Dog Years");  
    res.send("This is a successful POST");

});

app.listen(port);