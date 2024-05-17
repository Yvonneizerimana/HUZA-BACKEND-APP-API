import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import adminRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import documentation from "./doc/documentation.js";
import skilledroute from "./routes/index.js";

import profileRoute from "./routes/index.js";

import broute from "./routes/index.js";
//  import authJwt from "./helper.js/jwt.js";

import cors from "cors";

// import skilledroute from "./routes/skilled.route.js";

// import authJwt from "./helper.js/jwt.js";

const app = express();
const port = process.env.PORT;
const db = process.env.MONGODB_URI;
//cors

const corsOptions = {
  origin: [
    "https://neza-huza.netlify.app",
    process.env.clientApp1,
    process.env.clientApp2,
    process.env.clientApp3,
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};

//middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors(corsOptions));

//routes
app.use("/api-doc", swaggerUi.serve);
app.use("/api-doc", swaggerUi.setup(documentation));
//  app.use(authJwt())
app.use("/api", adminRouter);
app.use("/api", skilledroute);
app.use("/api", profileRoute);

app.use("/api/", broute);

// app.use("/api/v1",route)

//connect database

mongoose.connect(db);
try {
  console.log("DB connected");
  app.listen(port, () => {
    console.log(`server is running on port ${port} ....`);
  });
} catch (err) {
  console.log(err);
}
