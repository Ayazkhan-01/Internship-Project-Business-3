const express = require("express");
const { sendContactMess } = require("../controller/contactus")

const router = express.Router();

router.post("/contact", sendContactMess);

module.exports = router;