import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import adminRouter from './routes/index.js';
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import documentation from "./doc/documentation.js"
import skilledroute from "./routes/index.js";
// import authJwt from "./helper.js/jwt.js";
import cors from "cors";

const app = express()
const port = process.env.PORT 
const db = process.env.MONGODB_URI


//middleware
app.use(express.json())
app.use(cors)
app.use(cookieParser())

//routes
app.use('/api-doc', swaggerUi.serve);
app.use('/api-doc', swaggerUi.setup(documentation));
// app.use(authJwt())
app.use('/api', adminRouter);
app.use('/api',skilledroute);

// app.use("/api/v1",route)

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