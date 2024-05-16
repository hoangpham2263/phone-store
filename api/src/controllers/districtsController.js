import districtsService from "../services/districtsService";

const readFunc = async (req, res) => {
  try {
    if (req.query.idDistricts) {
      let data = await districtsService.readDistrictsWithDistricts(req?.query?.idDistricts);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    } else if (req.query.idCities) {
      let data = await districtsService.readDistrictsWithCity(req?.query?.idCities);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    } else {
      let data = await districtsService.readDistricts();
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

module.exports = {
  readFunc,
};
