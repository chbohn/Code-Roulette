var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var router = express.Router();
var path = __dirname + '/views/';

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/main.html', function(req, res) {
    var usr_name = req.body.user;
    var usr_password = req.body.pass;

    res.send(usr_name + ' ' + usr_password);
});

app.post('/main.html', function(req, res) {
    res.send('Us@@@ername: ' + req.body.user);
});


router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "login.html");
});

app.use("/",router);

/*app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});*/

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
