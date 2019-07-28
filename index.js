const { ApolloServer, gql } = require('apollo-server');
const hostels = require('./hostels');

 
const typeDefs = gql`  

  type Hostel {
    name: String
    location: String
  }
 
  type Query {
    hostels: [Hostel]
  }
`;


const resolvers = {
  Query: {
    hostels: () => hostels,
  },
}; 


const server = new ApolloServer({ typeDefs, resolvers }); 

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
