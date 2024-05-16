import db from "../models/index";
import bcrypt from "bcryptjs";
import { getGroupWithRoles } from "./JWTService";
import { createJWT } from "../middleware/JWTAction";
import { UploadCloud } from "../utility/UploadCloud";

const getAllUser = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "image", "lastName", "firstName", "phone", "email", "cities", "districts", "address", "sex"],
      include: { model: db.Group, attributes: ["id", "name", "description"] },
      order: [["id", "DESC"]],
    });
    if (users) {
      return { EM: "Get data success", EC: 0, DT: users, };
    } else {
      return { EM: "Get data success", EC: 0, DT: [], };
    }
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const getUserWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.User.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "image", "lastName", "firstName", "phone", "email", "cities", "districts", "address", "sex", "groupId"],
      include: { model: db.Group, attributes: ["id", "name", "description"] },
      order: [["id", "DESC"]],
    });
    let totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, users: rows, };
    return { EM: "Get data success", EC: 0, DT: data, };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const getUserById = async (idUser) => {
  try {
    let users = await db.User.findOne({
      attributes: ["id", "image", "lastName", "firstName", "phone", "email", "cities", "districts", "address", "sex"],
      include: { model: db.Group, attributes: ["id", "name", "description"] },
      where: { id: idUser }
    });
    if (users) {
      return { EM: "Get data success", EC: 0, DT: users, };
    } else {
      return { EM: "Get data success", EC: 0, DT: [], };
    }
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

// Check Email
const checkEmailExist = async (email) => {
  let user = await db.User.findOne({
    where: { email: email, },
  });
  if (user) {
    return true;
  }
  return false;
};

// Check Phone
const checkPhoneExist = async (phone) => {
  let user = await db.User.findOne({
    where: { phone: phone, },
  });
  if (user) {
    return true;
  }
  return false;
};

// Hash Password
const hashUserPassword = async (password) => {
  var salt = bcrypt.genSaltSync(10);
  var hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const createNewUser = async (data) => {
  try {
    // Check Email
    let isEmailExist = await checkEmailExist(data.email);
    if (isEmailExist) {
      return { EM: "The email is already exist", EC: 1, DT: "email", };
    }

    // Check Phone
    let isPhoneExist = await checkPhoneExist(data.phone);
    if (isPhoneExist) {
      return { EM: "The phone is already exist", EC: 1, DT: "phone", };
    }

    // Hash Password
    let hashPassword = await hashUserPassword(data.password);

    await db.User.create({
      lastName: data.lastName,
      firstName: data.firstName,
      cities: data.cities,
      districts: data.districts,
      address: data.address,
      phone: data.phone,
      password: hashPassword,
      email: data.email,
      sex: data.sex,
      groupId: data.groupId,
    });
    return { EM: "A user is created successfully!", EC: 0, DT: [], };
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const updateUser = async (data) => {
  try {
    let user = await db.User.findOne({
      where: {
        id: data.id,
      },
    });
    if (user) {
      let uploadImage = data.image
      if (!data?.image.startsWith("https://res.cloudinary.com")) {
        uploadImage = await UploadCloud(data.image, "imageAvatar")
      }
      const updateUser = await user.update({ lastName: data.lastName, firstName: data.firstName, cities: data.cities, districts: data.districts, address: data.address, sex: data.sex, groupId: data.groupId, image: uploadImage });
      let { id, lastName, firstName, phone, cities, districts, address, sex, image } = updateUser;
      let groupWithRoles = await getGroupWithRoles(updateUser);
      let payload = {
        user: {
          id: id,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          cities: cities,
          districts: districts,
          address: address,
          email: user.email,
          sex: sex,
          image: image
        },
        groupWithRoles,
      };
      let token = await createJWT(payload);
      await user.update({ refreshToken: token, });
      return { EM: "Update user success", EC: 0, DT: { access_token: token, groupWithRoles, }, };
    } else {
      return { EM: "User not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    console.log(error);
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

const deleteOneUser = async (id) => {
  try {
    let user = await db.User.findOne({
      where: {
        id: id,
      },
    });
    if (user) {
      await user.destroy();
      return { EM: "Delete user success", EC: 0, DT: [], };
    } else {
      return { EM: "User not exist", EC: 2, DT: [], };
    }
  } catch (error) {
    return { EM: "Something wrongs with services", EC: 1, DT: [], };
  }
};

module.exports = { getAllUser, getUserById, getUserWithPagination, createNewUser, updateUser, deleteOneUser };
