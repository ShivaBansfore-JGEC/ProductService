const express = require("express");

const router = express.Router();

const v1ReviewRoutes = require("./v1/reviewRoute");
router.use('/v1', v1ReviewRoutes);
module.exports = router;