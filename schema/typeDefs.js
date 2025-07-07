import { gql } from "apollo-server";

const typeDefs = gql` #graphql
    type Todo {
        id: ID!
        title: String!
        completed: Boolean!
    }

    type Query{
        todos: [Todo]
    }
`

export default typeDefs
