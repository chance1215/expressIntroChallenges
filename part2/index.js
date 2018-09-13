var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var fs = require('fs');
var bodyParse = require('body-parser');

app.use(bodyParse.json());

// ### Challenge 1:
// Create a POST route for "/create/:name/:age"
//that creates an object that looks like this:
// {
//   "name": "troy",
//   "age": 20
// }
// Then take that object and insert it into storage.json


app.post('/create/:name/:age', function(req, res) {
  let storage = fs.readFileSync(__dirname + '/storage.json', "utf8");
  let data = JSON.parse(storage);
  let obj = {
    name: req.params.name,
    age: req.params.age
  };
  data.push(obj);
  fs.writeFileSync(__dirname + '/storage.json', JSON.stringify(data));
  res.send(data);
});

// ### Challenge 2:
// Create a Get route for "/" that returns all of the objects inside storage.json.

app.get('/', function(req, res){
  let retrieve = fs.readFileSync('./part2/storage.json',"utf8");
  res.send(retrieve);
})


// ### Challenge 3:
// Create a Get route for "/:name"
// that returns the first object in storage.json that matches the name.
// If there is no object in storage.json that matches then return a 400 status.

app.get('/:name', function(req, res){
  let arr = JSON.parse(fs.readFileSync('./part2/storage.json',"utf8"));

   let user = arr.find(el => {
  return  el.name === req.params.name
  })
    if(user){
      res.send(user)
    }else{
      res.sendStatus(400);
    }


})





app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
