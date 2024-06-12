var http = require('http');
var server = http.createServer((req,res)=>{
res.write("welcome to home page");
res.end();
});
server.listen(3333,()=>console.log("Its working..."));
//console.log(server);