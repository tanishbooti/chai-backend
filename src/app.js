import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//app.use is used for middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
//this function is used to enable CORS (Cross-Origin Resource Sharing) for the application.
//origin means that the application will accept requests from the specified origin (in this case, process.env.CORS_ORIGIN) and allow credentials (such as cookies or authorization headers) to be included in the requests.

app.use(express.json({limit: "16kb"})) //this enables JSON parsing for incoming requests with a maximum size of 16kb. It allows the application to parse JSON data in the request body and make it available in req.body.
app.use(express.urlencoded({extended: true, limit: "16kb"})) //it enables URL-encoded data parsing for incoming requests with a maximum size of 16kb. It allows the application to parse URL-encoded data (such as form submissions) in the request body and make it available in req.body.
app.use(express.static("public")) //it enables serving static files from the "public" directory. This means that any files located in the "public" directory can be accessed directly via HTTP requests.
app.use(cookieParser())  //cookies are small pieces of data that are stored on the client-side and sent to the server with each request. The cookie-parser middleware is used to parse cookies from incoming requests and make them available in req.cookies. This allows you to access and manipulate cookies in your application.

/*What are Middlewares?
Middlewares are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can perform various
tasks such as modifying the request or response objects, ending the request-response cycle, or calling the next middleware function in the stack. Middlewares are used for tasks like logging, authentication, error handling, and more.
*/

//routes import
import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declaration
//we used app.use and not app.get because ab router ko laane ke liye middleware ki tarah kaam karna padta hai
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://localhost:8000/api/v1/users/register

export { app }