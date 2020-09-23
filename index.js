
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper= require('./operations');
const url='mongodb://localhost:27017/';
const dbname='conFusion';


MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
const db=client.db(dbname);

dboper.insertDocument(db,{name:"vadonut",description:"Test"},"dishes",(result)=>{
     console.log('Insert Document:\n',result.ops);
     
     dboper.findDocument(db,"dishes",(docs)=>{
         console.log("Find Documets:\n",docs);

         dboper.updateDocument(db,{name:"vadonut",},{description:"updated test"},"dishes",(result)=>{
             console.log('Updated Document:\n',result.result);

             dboper.findDocument(db,"dishes",(docs)=>{
                 console.log("Found Updated Documents:\n",docs);

                 db.dropCollection("dishes",(result)=>{
                     console.log("Droped Collection:",result);

                     client.close();
                 });
             });
         });
     });
});
});
    