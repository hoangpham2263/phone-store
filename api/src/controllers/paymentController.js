import brandService from "../services/brandService";

import PayOS from "@payos/node";
const payOS = new PayOS("YOUR_PAYOS_CLIENT_ID", "YOUR_PAYOS_API_KEY", "YOUR_PAYOS_CHECKSUM_KEY");

// Create Brand
const createFunc = async (req, res) => {
  try {
    const order = {
      amount: 1000,
      description: "test payment",
      orderCode: 10,
      returnUrl: 1,
      cancelUrl: 2
    }
    const paymentLink = await payOS.createPaymentLink(order)
    res.redirect(303, paymentLink.checkoutUrl)

    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

// Read Brand
// const readFunc = async (req, res) => {
//   try {
//     if (req.query.page && req.query.limit) {
//       let { page, limit } = req.query;
//       let data = await brandService.readBrandWithPagination(+page, +limit);
//       return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
//     } else {
//       let data = await brandService.readBrand();
//       return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
//   }
// };

// Update Brand
// const updateFunc = async (req, res) => {
//   try {
//     let data = await brandService.updateBrand(req.body.data);
//     return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
//   } catch (error) {
//     return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
//   }
// };

// Delete Brand
// const deleteFunc = async (req, res) => {
//   try {
//     let { id } = req.body;
//     let data = await brandService.deleteBrand(id);
//     return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ EM: "Error from server", EC: -1, DT: "", });
//   }
// };

module.exports = { readFunc, createFunc, updateFunc, deleteFunc };
