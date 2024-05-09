import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const app = express()
const port = process.env.PORT 
const db = process.env.MONGODB_URI


//middleware
app.use(express.json())


//routes


//connect database

mongoose.connect(db)
try{
console.log('DB connected')
app.listen(port,()=>{
    console.log( `server is running on port ${port} ....`)
})
}
catch(err){
    console.log(err)
}