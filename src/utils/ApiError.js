class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message) //this constructor calls the parent constructor (Error) with the message parameter. This sets the message property of the error object to the provided message.
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack //this.stack property is set to the provided stack trace. This is useful for debugging purposes, as it allows you to see where the error occurred in the code.
        } else{
            Error.captureStackTrace(this, this.constructor) //this captures the stack trace of the error and sets it to the stack property of the error object. This is useful for debugging purposes, as it allows you to see where the error occurred in the code.
        }

    }
}
// this class extends the built-in Error class in JavaScript. It is used to create custom error objects with additional properties such as statusCode, data, message, success, errors, and stack.
// The constructor takes the following parameters:
// - statusCode: The HTTP status code associated with the error.
// - message: A message describing the error (default is "Something went wrong").
// - errors: An array of error objects (default is an empty array).
// - stack: The stack trace of the error (default is an empty string).



export {ApiError}