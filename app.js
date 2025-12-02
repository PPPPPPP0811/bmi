var express = require('express');
var app = express();
// เพิ่มมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม //
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.sendFile(__dirname + '/index.html');
   res.render('index',{weight: '',height: '', result: ''});
})


// This responds a POST request for the homepage
app.post('/', function (req, res) {
   var weight1 = Number(req.body.weight);
   var height1 = Number(req.body.height);
   var height2 =   height1/100;
   var bmi = weight1 / (height2 * height2);
   var formattedBmi = bmi.toFixed(2);
   res.render('index',{weight: weight1, height: height1, result: formattedBmi});
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

