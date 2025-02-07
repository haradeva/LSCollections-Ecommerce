const userService = require("../services/user.service");
const jwtProvider = require("../config/jwtProvider");

const getUserProfile = async (req, res) => {
  try {
    const jwt = req.headers.authorization?.split(" ")[1];

    if (!jwt) {
      return res.status(404).send({ error: "Token not found" });
    }

    const userId = jwtProvider.getUserIdFromToken(jwt);

    if (!userId) {
      return res.status(401).send({ error: "Invalid or expired token" });
    }

    const user = await userService.findUserById(userId);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { getUserProfile, getAllUsers };
