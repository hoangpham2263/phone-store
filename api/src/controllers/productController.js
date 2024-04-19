const cloudinary = require("cloudinary").v2;
import productService from "../services/productService";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Read Product
const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit && req.query.category) {
      let { page, limit, category } = req.query;
      let data = await productService.readProductWithCategory(+page, +limit, category);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else if (req.query.page && req.query.limit && req.query.search) {
      let { page, limit, search } = req.query;
      let data = await productService.readProductWithSearch(+page, +limit, search);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      let data = await productService.readProductWithPagination(+page, +limit);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else if (req.query.id) {
      let { id } = req.query;
      let data = await productService.readProductId(+id);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      let data = await productService.readProduct();
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

// Read Product Detail
const readFuncDetail = async (req, res) => {
  try {
    if (req.params.slug) {
      let { slug } = req.params;
      let data = await productService.readProductDetail(slug);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    } else {
      return res.status(200).json({
        EM: "Read product success",
        EC: 0,
        DT: [],
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

// Create Product
const uploadCloudinaryList = async (valueImage, folderStorage) => {
  const uploadImageLists = [];
  for (let i = 0; i < valueImage.length; ++i) {
    const uploadImageItem = await cloudinary.uploader.upload(valueImage[i], {
      folder: folderStorage,
    });
    uploadImageLists.push(uploadImageItem.secure_url);
  }
  return uploadImageLists;
};
const createFunc = async (req, res) => {
  try {
    const {
      title,
      imageAvatar,
      imageDetail,
      description,
      price,
      numberOfFloors,
      width,
      length,
      roomNumber,
      facade,
      productCode,
      categoryId,
    } = req.body.data;

    if (
      !title ||
      !imageAvatar ||
      !imageDetail ||
      !price ||
      !numberOfFloors ||
      !width ||
      !length ||
      !roomNumber ||
      !facade ||
      !productCode ||
      !categoryId
    ) {
      return res.status(200).json({
        EM: "Missing Required Parameters",
        EC: 1,
        DT: "",
      });
    }

    // Upload cloudinary imageAvatar
    const imageCloudinaryAvatar = await uploadCloudinaryList(imageAvatar, "blueprint_image_avatar");

    // Upload cloudinary imageAvatar
    const imageCloudinaryDetail = await uploadCloudinaryList(imageDetail, "blueprint_image_detail");

    // const newImageAvatar = JSON.stringify(imageCloudinaryAvatar);
    // const newImageDetail = JSON.stringify(imageCloudinaryDetail);

    const newData = {
      ...req.body.data,
      imageAvatar: imageCloudinaryAvatar,
      imageDetail: imageCloudinaryDetail,
    };
    let data = await productService.createProduct(newData);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

// Update Product
const updateFunc = async (req, res) => {
  try {
    const { imageAvatar, imageDetail } = req.body.data;

    if (imageAvatar) {
      const imageCloudinaryAvatar = await uploadCloudinaryList(
        imageAvatar,
        "blueprint_image_avatar"
      );
      // const newImageAvatar = JSON.stringify(imageCloudinaryAvatar);
      const newData = {
        ...req.body.data,
        imageAvatar: imageCloudinaryAvatar,
      };
      let data = await productService.updateProduct(newData);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }
    if (imageDetail) {
      const imageCloudinaryDetail = await uploadCloudinaryList(
        imageDetail,
        "blueprint_image_detail"
      );
      // const newImageDetail = JSON.stringify(imageCloudinaryDetail);
      const newData = {
        ...req.body.data,
        imageDetail: imageCloudinaryDetail,
      };
      let data = await productService.updateProduct(newData);
      return res.status(200).json({
        EM: data.EM,
        EC: data.EC,
        DT: data.DT,
      });
    }

    const newData = { ...req.body.data };
    let data = await productService.updateProduct(newData);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

// Delete Product
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await productService.deleteProduct(id);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

module.exports = {
  readFunc,
  readFuncDetail,
  createFunc,
  updateFunc,
  deleteFunc,
};
