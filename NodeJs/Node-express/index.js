const express=require('express');
 http=require('http');

 const hostname='localhost';
 const port=3000;

 const app=express();
 const morgan=require('morgan');

 const bodyParser=require('body-parser');
 app.use(bodyParser.json());


 app.use(morgan('dev'));
 app.use(express.static(__dirname+'/public'));

 app.all('/dishes',(req,res,next)=>{
     res.statusCode=200;
     res.setHeader('Content-Type','text/plain');
     next();

 });

 app.get('/dishes',(req,res,next)=>{
     res.end('will send all dishes to you!');
 });
 
 app.post('/dishes',(req,res,next)=>{
     res.end('will add the dish' + req.body.name + 'with details' + req.body.description);

 });

 app.put('/dishes',(req,res,next)=>{
     res.statusCode=403;
     res.end('put not supported on /dishes');
 });

 app.delete('/dishes',(req,res,next) => {
    res.end('deleting all dishes!');
 });

 app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

 const server=http.createServer(app);

 server.listen(port,hostname,()=>{
     console.log(`server running at http://${hostname}:${port}`);   
 });