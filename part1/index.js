var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var bodyParse = require('body-parser');
var fs = require('fs');
app.use(bodyParse.json());
// ### Challenge 1:
// Create a GET route for "/hello" that returns the response "Hello!".
    //Answers:
app.get('/hello', function(req, res) {
  res.send("Hello!");
});




// ### Challenge 2:
// Create a POST route for "/create/:name"
//that returns a json object that looks like this:
// {
//   "id":1,
//   "name":"the name they pass in the route"
// }

app.post('/create/:name',function(req, res){
// req.body.obj +

res.send(req.body);
});


// ### Challenge 3:
// Create a GET route for "/" that returns the index.html file.

app.get('/', function(req, res){
let index = fs.readFileSync("./part1/index.html","utf8")
  console.log(index);
  res.send(index)
})




// ### Challenge 4:
// Create a GET route for "/verify/:age"
//that checks if the age is greater than 13.
//If it is then it sends a 200 status response (for all good).
// If it is not greater than 13 then send a 403 status code.
// For more information on what status codes mean refer to this - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


app.get("/verify/:age",function(req, res){
  // let good = `num > 13 + ${req.params.age}`;
  if(req.params.age > 13){
     res.sendStatus(200);
   }else{
     res.sendStatus(403);
    
  }
  res.send(req.body.good);
});

app.use(function(req, res){
  res.sendStatus(404);
});
app.listen(port, function(){
  console.log('Listening on port',port);
});
