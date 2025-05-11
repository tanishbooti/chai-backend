import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
//connectionInstance (an object) is the instance of the connection to the MongoDB database. It is created by calling the connect method of the mongoose library, which establishes a connection to the MongoDB server using the provided connection string. The connection string includes the username, password, and host information required to connect to the database.
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  //MONGODB_URI is the connection string to connect to the MongoDB database. It contains the username, password, and host information required to connect to the database. DB_NAME is the name of the database you want to connect to.
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);  //.connection.host means that it will return the host name of the MongoDB server to which the connection is established. This is useful for debugging and logging purposes, as it allows you to see which server your application is connected to.
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1) //process.exit(1) means that the process has exited with an error. This means that the connection to the database has failed and the application cannot continue running.
    }
}
/*this function returns a promise 
that resolves when the connection to the database is established successfully. 
If there is an error while connecting to the database, the promise is rejected and the error is logged to the console.
 The process.exit(1) statement is used to terminate the application with an exit code of 1, indicating that an error occurred during the connection process. */
export default connectDB