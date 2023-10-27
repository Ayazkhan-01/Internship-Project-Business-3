const express = require('express');
const { getManualEntry, postManualEntry, DeleteManualEntry } = require('../controller/manualEntry');

const router = express.Router();

router.get('/getmanualentry', getManualEntry); // Route for GET request
router.post('/postmanualentry', postManualEntry); // Route for POST request
router.post('/deleteentry', DeleteManualEntry); // Route for DELETE request

module.exports = router;