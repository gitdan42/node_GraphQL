// node-graphql/src/schema.js

const { gql } = require('apollo-server')// ES5
//import gql from "apollo-server" // ES 6 because it uses import

const typeDefs = gql`
  type Student {
    id: ID!
    email: String!
    fullName: String!
    dept: String
    enrolled: Boolean
  }

  type Query {
    enrollment: [Student!]!
    student(id: ID!): Student
  }

  type Mutation {
    registerStudent(email: String!, fullName: String!): Student!
    enroll(id: ID!): Student
  }
`
module.exports = {
    typeDefs,
  }
