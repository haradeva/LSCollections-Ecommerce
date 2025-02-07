const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/user.service");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).send({ error: "Token not found..." });
    }

    const userId = jwtProvider.getUserIdFromToken(token);
    const user = await userService.findUserById(userId);

    if (!user) {
      return res.status(404).send({ error: "User not found..." });
    }

    req.user = user;
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Authentication FAILED!! " + error.message });
  }
  next();
};

module.exports = authenticate;
