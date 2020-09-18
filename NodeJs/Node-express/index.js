const express=require('express');
 http=require('http');

 const hostname='localhost';
 const port=3000;

 const app=express();
 const morgan=require('morgan');

 const bodyParser=require('body-parser');
 const dishRouter=require('./routes/dishrouter');
 app.use(bodyParser.json());


 app.use(morgan('dev'));
 app.use(express.static(__dirname+'/public'));

app.use('/dishes',dishRouter);
 const server=http.createServer(app);

 server.listen(port,hostname,()=>{
     console.log(`server running at http://${hostname}:${port}`);   
 });