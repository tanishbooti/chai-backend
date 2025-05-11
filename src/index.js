// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
}) //this means that the environment variables are loaded from the .env file located in the root directory of the project. The dotenv package is used to load environment variables from a .env file into process.env, which is a global object in Node.js that contains information about the current process. This allows you to access environment variables in your code using process.env.VARIABLE_NAME.



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

//this code is used to connect to a MongoDB database using the Mongoose library.
//the function connectDB is defined to establish a connection to the database using the mongoose.connect method.








/*
import express from "express"
const app = express()
( async () => { //directly calls the function
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/