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
        },
        updateTodo: async(_, {id, title, completed})=>{
            const findTodo = await Todo.findById(id)
            if(findTodo){
                let updatedFields = {}
                updatedFields.title = title
                updatedFields.completed = completed

                const updatedTodo = await Todo.findByIdAndUpdate(id, updatedFields, {new: true})
                return updatedTodo
            }
        }
    }
}


export default resolvers