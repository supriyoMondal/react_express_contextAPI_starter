const express = require('express');
const router = express.Router();
const { testRoute } = require('../middleware/user')

router.get("/", testRoute)

module.exports = router;