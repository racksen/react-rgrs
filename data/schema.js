import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from "graphql";

let Schema = (db)=>{
  let data = [
    {counter:7},{counter:14},{counter:21}
  ];

  let CounterType = new GraphQLObjectType({
    name: 'Counter',
    fields: ()=>({
      counter : {
        type : GraphQLInt
      }
    })
  })

  let LinkType = new GraphQLObjectType({
    name: 'Link',
    fields: ()=>({
      _id : {type : GraphQLString},
      title : {type : GraphQLString},
      url : {type : GraphQLString},
    })
  })

  let schema = new GraphQLSchema({
    query : new GraphQLObjectType({
      name : 'Query',
      fields : ()=>({
        links : {
          type : new GraphQLList(LinkType),
          resolve: ()=> db.collection('links').find({}).toArray(),
        },
        data : {
          type : new GraphQLList(CounterType),
          resolve: ()=> data
        },
        counter : {
          type : GraphQLInt,
          resolve: ()=> 43
        },
        hello : {
          type : GraphQLString,
          resolve: ()=> 'Hello Senthil!!!'
        }
      }),
    }),
    mutation : new GraphQLObjectType({
      name : 'Mutation',
      fields : ()=>({
        incrementCounter : {
          type : GraphQLString,
          resolve: () => 6+1,
        },
      }),
    }),
  });
  return schema;
}

export default Schema;
