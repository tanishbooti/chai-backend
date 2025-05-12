import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
//fs is a built-in module in Node.js that allows you to work with the file system
// fs is used to read and write files on your computer
//copy the below code as it is in the cloudinary documentation

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
//local file path is the path of the file on your computer
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        }) 
        //auto means that cloudinary will automatically detect the type of file you are uploading
        // file has been uploaded successfully
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        //remove the locally saved temporary file as the upload operation got successful
        // file that was stored temporarily on your computer is deleted
        //response is the response from cloudinary which contains the url of the file
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}