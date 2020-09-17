const express=require('express');
 http=require('http');

 const hostname='localhost';
 const port=3000;

 const app=express();

 app.use((req,res,next)=>{
     console.log(req.headers);
     res.statusCode=200;
     res.setHeader('Content-Type','text/html');
     res.end('<html><body><h1>This is an Express Server</h1></body>');
 });

 const server=http.createServer(app);

 server.listen(port,hostname,()=>{
     console.log(`server running at http://${hostname}:${port}`);   
 });