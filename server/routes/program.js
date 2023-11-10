const express = require("express");
const { getAllPrograms, filterPrograms } = require("../controller/program"); // Correct the import path

const router = express.Router();

router.get("/all-programs", getAllPrograms);
router.post("/filter-programs", filterPrograms);

module.exports = router; // Export the router, not an object
