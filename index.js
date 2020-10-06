
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper= require('./operations');
const url='mongodb://localhost:27017/';
const dbname='conFusion';


MongoClient.connect(url,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then((client)=>{
   // assert.equal(err,null);
const db=client.db(dbname);

dboper.insertDocument(db,{name:"vadonut",description:"Test"},"dishes")
.then((result)=>{
     console.log('Insert Document:\n',result.ops);
     
     return dboper.findDocument(db,"dishes")
})
.then((docs)=>{
         console.log("Find Documets:\n",docs);

         return dboper.updateDocument(db,{name:"vadonut",},{description:"updated test"},"dishes")
 })
.then((result)=>{
             console.log('Updated Document:\n',result.result);

            return dboper.findDocument(db,"dishes")
})
.then((docs)=>{
                 console.log("Found Updated Documents:\n",docs);

            return db.dropCollection("dishes")
})            
.then((result)=>{
                     console.log("Droped Collection:",result);

                     client.close();
})
.catch((err)=> console.log(err));      
})
.catch((err)=> console.log(err));
    