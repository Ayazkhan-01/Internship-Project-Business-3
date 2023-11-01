const express = require("express");
const { result } = require("../controller/result"); // Correct the import path

const router = express.Router();

router.get("/result", result);

module.exports = router; // Export the router, not an object
