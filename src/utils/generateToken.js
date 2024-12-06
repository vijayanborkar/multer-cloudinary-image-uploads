const jwt = require("jsonwebtoken");
require("dotenv").config();

const payload = { lesson: "cloudinaryUpload" };

const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "1h" });
console.log("Generated Token:", token);
