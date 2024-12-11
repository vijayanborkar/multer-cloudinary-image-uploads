const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log("Authorization Header:", req.header("Authorization"));
  console.log("Extracted Token:", token);

  if (!token) {
    return res
      .status(403)
      .json({ message: "No token provided, authorization denied." });
  }

  try {
    console.log("JWT_TOKEN from .env:", process.env.JWT_TOKEN);
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    console.log("Decoded Token:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error Verifying Token:", error.message);
    return res.status(401).json({ message: "Invalid Token." });
  }
};

module.exports = { authenticateJWT };
