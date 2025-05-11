class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }
// // this class is used to create a standardized response object for API responses. It takes the following parameters:
// // - statusCode: The HTTP status code of the response.
// // - data: The data to be included in the response.
// // - message: A message describing the response (default is "Success").