const cloudinary = require("cloudinary").v2;
cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET });

const UploadCloud = async (imagePath, folderStorage) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(imagePath, { folder: folderStorage });
        return uploadResult.secure_url;
    } catch (error) {
        throw error;
    }
};

export { UploadCloud }