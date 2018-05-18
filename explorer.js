const express = require('express');
const app = express();

const psList = require('ps-list');

var http = require('http');


var spawn = require('child_process').spawn;
var py = spawn('python', ['PlanetStatistics.py']);
var dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});

py.stdout.on('end', function(req,res){
  console.log('The value of dataString is '+ dataString);
});

app.get('/', function(req,res){
  py.stdin.end();
  res.writeHead(200);
  res.write("Collected from Child Process"+ dataString);
  res.write('hello World');
  res.end();

})

app.listen(3000);

/*
psList().then(data => {
    console.log(data);
    //=> [{pid: 3213, name: 'node', cmd: 'node test.js', cpu: '0.1', memory: '1.5'}, ...]
});
*/
/*
var server = http.createServer(function(req,res){
  py.stdin.end();
  res.writeHead(200);
  res.end("The force is stronger now!")
})

server.listen(3000);
console.log("Server Started on port 3000");
*/
