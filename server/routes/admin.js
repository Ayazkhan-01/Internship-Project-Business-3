const express = require("express");
const { adminUser } = require("../controller/admin"); // Correct the import path

const router = express.Router();

router.get("/login", adminUser);

module.exports = router; // Export the router, not an object
