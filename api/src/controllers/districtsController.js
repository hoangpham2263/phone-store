import districtsService from "../services/districtsService";

const readFunc = async (req, res) => {
  try {
    let data
    if (req.query.idDistricts) {
      data = await districtsService.readDistrictsWithDistricts(req?.query?.idDistricts);
    } else if (req.query.idCities) {
      data = await districtsService.readDistrictsWithCity(req?.query?.idCities);
    } else {
      data = await districtsService.readDistricts();
    }
    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

module.exports = { readFunc };
