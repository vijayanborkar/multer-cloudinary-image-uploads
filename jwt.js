const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken(payload, expiresIn = "1h") {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
  }
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

try {
  const payload = { lesson: "cloudinaryUpload" };
  const token = generateToken(payload);
  console.log("Generated Token:", token);
} catch (error) {
  console.error("Error generating token:", error.message);
}
