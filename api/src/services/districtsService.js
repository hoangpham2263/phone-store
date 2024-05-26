import db from "../models/index";

const readDistrictsWithDistricts = async (id) => {
  try {
    let data = await db.Districts.findOne({
      attributes: ["id", "name", "citiesId"],
      order: [["id", "ASC"]],
      where: { id: id }
    });
    return { EM: "Read districts success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const readDistrictsWithCity = async (id) => {
  try {
    let data = await db.Districts.findAll({
      attributes: ["id", "name", "citiesId"],
      order: [["id", "ASC"]],
      where: { citiesId: id }
    });
    return { EM: "Read districts success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

const readDistricts = async () => {
  try {
    let data = await db.Districts.findAll({
      attributes: ["id", "name", "citiesId"],
      order: [["name", "ASC"]],
    });
    return { EM: "Read districts success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with service", EC: 1, DT: [], };
  }
};

module.exports = { readDistrictsWithCity, readDistricts, readDistrictsWithDistricts };
