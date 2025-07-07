import {Schema, model} from "mongoose"


const todoSchema = new Schema({
    title:String,
    completed:{
        type: Boolean,
        default: false
    }
})


export const Todo = model('Todo', todoSchema)

