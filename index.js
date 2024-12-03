const express = require("express");
const fs = require("fs");
const { fileRouter } = require("./src/router/fileRouter.js");
const path = require("path");
const cors = require("cors");

const app = express();

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  try {
    fs.mkdirSync(uploadDir);
  } catch (error) {
    console.error("Error creating uploads directory:", error);
    process.exit(1);
  }
}

app.use(cors());
app.use("/src/uploads", express.static("/src/uploads"));

app.use("/files", fileRouter);

app.get("/", (req, res) => {
  res.send("Welcome to file/image upload");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
