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

    type Mutation{
        addTodo(title: String!): Todo
        deleteTodo(id: ID!): String
        updateTodo(id: ID!, title:String, completed: Boolean): Todo
    }
`

export default typeDefs
