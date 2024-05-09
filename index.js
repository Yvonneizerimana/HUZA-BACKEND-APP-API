import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import adminRouter from './routes/index.js';
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import documentation from "./doc/documentation.js"

const app = express()
const port = process.env.PORT 
const db = process.env.MONGODB_URI


//middleware
app.use(express.json())
app.use(cookieParser())

//routes
app.use('/api', adminRouter);
app.use('/api-doc', swaggerUi.serve);
app.use('/api-doc', swaggerUi.setup(documentation));

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