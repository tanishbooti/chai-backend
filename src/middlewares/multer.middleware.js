//multer is a middleware for handling multipart/form-data, which is used for uploading files.
// It is primarily used for uploading files to the server.
// It makes it easy to handle file uploads in your Node.js applications.



import multer from "multer";


//this function is used to store the file in the local storage
// multer.diskStorage is a function that creates a storage engine for multer
// it takes an object with two properties: destination and filename
// destination is the folder where the file will be stored
// filename is the name of the file that will be stored
// cb is a callback function that is called when the file is stored
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname) //original name of the file

    }
  })
  
export const upload = multer({ 
    storage, 
})