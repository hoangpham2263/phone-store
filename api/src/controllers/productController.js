import productService from "../services/productService";
import { UploadCloudList } from '../utility/UploadCloudList'


// Read Product
const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit && req.query.categories) {
      let { page, limit, categories } = req.query;
      let data = await productService.readProductWithCategories(+page, +limit, categories);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });

    } else if (req.query.page && req.query.limit && req.query.search) {
      let { page, limit, search } = req.query;
      let data = await productService.readProductWithSearch(+page, +limit, search);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });

    } else if (req.query.page && req.query.limit) {
      let { page, limit } = req.query;
      let data = await productService.readProductWithPagination(+page, +limit);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });

    } else if (req.query.id) {
      let { id } = req.query;
      let data = await productService.readProductId(+id);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });

    } else {
      let data = await productService.readProduct();
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    }

  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Read Product Detail
const readFuncDetail = async (req, res) => {
  try {
    if (req.params.slug) {
      let { slug } = req.params;
      let data = await productService.readProductDetail(slug);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });

    } else {
      return res.status(200).json({ EM: "Read product success", EC: 0, DT: [], });
    }

  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Create Product
const createFunc = async (req, res) => {
  try {
    const { title, price, version, quantity, image, capacity, color, percentDiscount, categoriesId } = req.body.data;
    if (!title || !price || !version || !quantity || !image || !capacity || !color || !percentDiscount || !categoriesId) {
      return res.status(200).json({ EM: "Missing Required Parameters", EC: 1, DT: "", });
    }

    const imageCloud = await UploadCloudList(image, "blueprint_image_avatar");
    const newData = { ...req.body.data, image: imageCloud, };
    let data = await productService.createProduct(newData);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });

  } catch (error) {
    console.log(error)
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Update Product
const updateFunc = async (req, res) => {
  try {
    const { image } = req.body.data
    let newData = req.body.data;

    if (image) {
      const imageCloud = await UploadCloudList(image, "blueprint_image_avatar");
      newData = await { ...req.body.data, image: imageCloud, };
    }
    const data = await productService.updateProduct(newData);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });

  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Delete Product
const deleteFunc = async (req, res) => {
  try {
    let { id } = req.body;
    let data = await productService.deleteProduct(id);
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT });

  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
  }
};

module.exports = { readFunc, readFuncDetail, createFunc, updateFunc, deleteFunc };
