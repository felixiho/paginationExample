const { ApolloServer, gql } = require('apollo-server');
const hostels = require('./hostels');

 
const typeDefs = gql`  

  type Hostel {
    name: String
    location: String
  }
 

  type Query {
    hostels (first: Int, offset: Int): [Hostel]
  }
`;


const resolvers = {
  Query: {
    hostels:  (root, args) => {
      const {first, offset} = args; 
      const result =  offset === undefined ?
                        hostels.splice(0, first)
                          : hostels.splice(offset, first);
      return result;
    },
  },
}; 


const server = new ApolloServer({ typeDefs, resolvers }); 

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
