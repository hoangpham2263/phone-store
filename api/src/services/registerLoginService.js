require("dotenv").config();
import db from "../models/index";
import bcrypt from "bcryptjs";
import { Op } from "sequelize";
import { getGroupWithRoles } from "./JWTService";
import { createJWT } from "../middleware/JWTAction";

// Check Email
const checkEmailExist = async (email) => {
  let user = await db.User.findOne({
    where: {
      email: email,
    },
  });
  if (user) {
    return true;
  }
  return false;
};

// Check Phone
const checkPhoneExist = async (phone) => {
  let user = await db.User.findOne({
    where: {
      phone: phone,
    },
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

// Register
const registerNewUser = async (rawUserData) => {
  try {
    // Check Email
    let isEmailExist = await checkEmailExist(rawUserData.email);
    if (isEmailExist) {
      return {
        EM: "The email is already exist",
        EC: 1,
        DT: "",
      };
    }

    // Check Phone
    let isPhoneExist = await checkPhoneExist(rawUserData.phone);
    if (isPhoneExist) {
      return {
        EM: "The phone is already exist",
        EC: 1,
        DT: "",
      };
    }

    // Hash Password
    let hashPassword = await hashUserPassword(rawUserData.password);

    await db.User.create({
      lastName: rawUserData.lastName,
      firstName: rawUserData.firstName,
      email: rawUserData.email,
      password: hashPassword,
      phone: rawUserData.phone,
      sex: rawUserData.sex,
      groupId: 3,
    });

    return {
      EM: "A user is created successfully!",
      EC: 0,
      DT: "",
    };
  } catch (error) {
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

// Login
const checkPassword = async (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword); // true or false
};

const handleLoginUser = async (data) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [{ email: data.valueLogin }, { phone: data.valueLogin }],
      },
    });
    if (user) {
      let isCorrectPassword = await checkPassword(data.password, user.password);
      if (isCorrectPassword) {
        let { lastName, firstName, address, sex } = user.dataValues;
        let dataUsers = { lastName, firstName, address, sex };
        let groupWithRoles = await getGroupWithRoles(user);
        let payload = {
          email: user.email,
          groupWithRoles,
          expiresIn: process.env.JWT_EXPIRES_IN, // 60 milliseconds
        };
        let token = await createJWT(payload);
        await user.update({
          refreshToken: token,
        });
        return {
          EM: "Login user success",
          EC: 0,
          DT: {
            access_token: token,
            groupWithRoles,
            dataUsers,
          },
        };
      }
    }
    return {
      EM: "Your email/phone number or password is incorrect!",
      EC: 1,
      DT: [],
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrongs with services",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = { registerNewUser, handleLoginUser };
