var http = require('http');

var spawn = require('child_process').spawn;
var py = spawn('python', ['HelloWorld.py']);
var dataString = '';

py.stdout.on('data', function(data){
  dataString += data.toString();
});

py.stdout.on('end', function(){
  console.log('The value of dataString is '+ dataString);
});

var server = http.createServer(function(req,res){
  py.stdin.end();
  res.writeHead(200);
  res.end("The force is stronger now!")
})

server.listen(3000);
console.log("Server Started on port 3000");
