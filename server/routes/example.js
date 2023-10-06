const express = require("express");
const { getAllUsers } = require("../controller/example"); // Correct the import path

const router = express.Router();

router.get("/users", getAllUsers);

module.exports = router; // Export the router, not an object
