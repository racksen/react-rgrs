import express from 'express';
import Schema from "./data/schema";
import GraphQLHTTP from "express-graphql";
import fs from 'fs';
import {graphql} from "graphql";
import {introspectionQuery} from "graphql/utilities";

import {MongoClient} from "mongodb";

let app = new express();

(async()=>{
  let url=process.env.MONGOLAB_RGS_URL;
  let db = await MongoClient.connect(url);
  let schema = Schema(db)
  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true,
  }));

  app.listen(3000,()=>console.log("Listening on port 3000"));
//Generate schema.json
  let json = await graphql(schema,introspectionQuery)
  fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), (err)=>{
    if(err) throw err;
    console.log("schema.json been created");
  });

})();

app.use(express.static('./public'))




/*
let db;
MongoClient.connect("mongodb://rgrs:rgrs@ds059215.mongolab.com:59215/rgrs",(err,database)=>{
  if(err) throw err;
  db=database;
  app.use('/graphql', GraphQLHTTP({
    schema : schema(db),
    graphiql: true,
  }));
  app.listen(3000,()=>console.log("Listening on port 3000"));
});

app.get('/data/links', (req, res)=> {
  db.collection('links').find({}).toArray((err,links)=>{
    if(err) throw err;
    res.json(links);
  });
});
*/
