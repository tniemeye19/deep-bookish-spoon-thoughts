// import the gql tagged template functioin
const { gql } = require('apollo-server-express');

// create out typeDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }`
;

// export the typeDefs
module.exports = typeDefs;