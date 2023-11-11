import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadImage = async (file) => {
    const newFileName = `${new Date().getTime()}-${file.name}`
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: "img", filename_override: `${newFileName}`, use_filename: true, unique_filename: false }, (err) => reject(err)).end(file?.data, () => resolve(newFileName));
    })

};

export default uploadImage