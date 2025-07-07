import {config as  configDotenv } from "dotenv"
import express from "express"

configDotenv()
const app = express()
const port = process.env.PORT


app.get('/health', (req, res)=>{
    console.log(res.send("Hello"))
})


app.listen(port, ()=>{
    console.log(`server run on port: ${port}`)
})