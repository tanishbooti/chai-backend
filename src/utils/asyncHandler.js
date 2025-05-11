const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }

// this is a higher-order function that takes a request handler function as an argument and returns a new function that handles errors. in detail, 
// 1. it returns a function that takes req, res, and next as arguments.
// 2. it calls the request handler function with req, res, and next as arguments.
// 3. it uses Promise.resolve to ensure that the request handler function is executed as a promise.
// 4. if the request handler function throws an error, it catches the error and passes it to the next middleware function using next(err).



// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }