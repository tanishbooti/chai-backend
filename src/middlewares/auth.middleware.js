import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";
// _ used below is used to indicate that the variable is not going to be used. It is a convention in JavaScript to indicate that a variable is intentionally unused. This can help prevent linting errors or warnings about unused variables, and it also serves as a visual cue to other developers that the variable is not meant to be used in the code.
export const verifyJWT = asyncHandler(async(req, _, next) => {
    //next means that hmara kaam khtm hogya ab isko aage lekr jao: chahe aage lekr jao or chahe agle middleware ke paas
    try {
        //as we used cookieParser (which is a middleware), request (req) got some extra funtions like req.cookies
        //we already added cookies of accessToken and refreshToken
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        //
        
        // console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }

        //now we will verify the token. .verify takes 2 params: token and secret key
        //jwt.verify will return the decoded token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    // we cant use ._id as we during signing we used made id as id
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})