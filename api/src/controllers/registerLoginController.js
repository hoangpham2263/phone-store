import registerLoginService from "../services/registerLoginService";

// Register
const registerUser = async (req, res) => {
  try {
    const { lastName, firstName, email, password, phone, sex } = req.body.data;
    if (!lastName || !firstName || !email || !password || !phone || !sex) {
      return res.status(200).json({
        EM: "Missing Required Parameters",
        EC: 1,
        DT: "",
      });
    }
    if (password && password.length < 6) {
      return res.status(200).json({
        EM: "Your password must have more than 6 letters", // error message
        EC: "1", // error code
        DT: "", // data
      });
    }

    let data = await registerLoginService.registerNewUser(req.body.data);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    if (!req.body.data.valueLogin || !req.body.data.password) {
      return res.status(200).json({ EM: "Missing required parameters", EC: 1, DT: "", });
    }
    if (req.body.data.password && req.body.data.password.length < 6) {
      return res.status(200).json({ EM: "Your password must have more than 6 letters", EC: 1, DT: "", });
    }

    let data = await registerLoginService.handleLoginUser(req.body.data);

    res.cookie("jwt", data.DT.access_token, { httpOnly: true, maxAge: 1 * 60 * 60 * 1000 });

    return res.status(200).json({ EM: data.EM, EC: data.EC, DT: data.DT, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: [],
    });
  }
};

// Read JWT
const readJWT = async (req, res) => {
  try {
    const cookie = req.cookies;
    if (cookie.jwt) {
      return res.status(200).json({ EM: "Read JWT success", EC: "0", DT: cookie, });
    } else {
      return res.status(200).json({ EM: "JWT not exists success", EC: "1", DT: [], });
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

// Logout
const logoutUser = async (req, res) => {
  try {
    const cookie = req.cookies;
    if (cookie?.jwt) {
      res.clearCookie("jwt", { secure: true, });

      return res.status(200).json({ EM: "Logout user success", EC: 0, DT: [], });
    } else {
      return res.status(200).json({ EM: "Logout user error", EC: 1, DT: [], });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ EM: "Error from server", EC: -1, DT: [], });
  }
};

module.exports = { registerUser, loginUser, logoutUser, readJWT };
