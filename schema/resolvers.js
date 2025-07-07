import { Todo } from "../model/todo.js";

const resolvers = {
    Query:{
        todos : async()=> await Todo.find()
    },
    Mutation:{
        addTodo:async(_, {title})=>{
            const todo = new Todo({title})
            return await todo.save()
        },
        deleteTodo: async(_,{id})=>{
            await Todo.findByIdAndDelete(id)
            return "Todo Deleted Successfully"
        }
    }
}


export default resolvers