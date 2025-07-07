import { Todo } from "../model/todo.js";

const resolvers = {
    Query:{
        todos : async()=> await Todo.find()
    }
}


export default resolvers