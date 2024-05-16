import citiesService from "../services/citiesService";

const readFunc = async (req, res) => {
  try {
    if (req?.query?.idCities) {
      let data = await citiesService.readCitiesWithId(req?.query?.idCities);
      return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
    } else {
      let data = await citiesService.readCities();
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
