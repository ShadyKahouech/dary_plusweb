const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controller/userController");

router.get("/getallusers", getAllUsers);

module.exports = router;
