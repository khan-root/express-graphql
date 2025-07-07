import { ApolloServer } from "apollo-server"
import {config as  configDotenv } from "dotenv"
import express from "express"
import mongoose from "mongoose"
import typeDefs from "./schema/typeDefs.js"
import resolvers from "./schema/resolvers.js"

configDotenv()
const app = express()
const port = process.env.PORT
const mongo_uri = process.env.MONGO_URI



const createServer = async()=>{
    try{
        await mongoose.connect(mongo_uri)

        const server = new ApolloServer({
            typeDefs,
            resolvers,
        })

        const {url} = await server.listen({port: port})
        console.log(url)
    }catch(err){
        console.log(err)
    }
}

createServer()