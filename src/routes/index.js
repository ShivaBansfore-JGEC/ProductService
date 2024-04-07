const express = require("express");

const router = express.Router();

const v1ReviewRoutes = require("./v1/reviewRoute");
const v1ProductRoutes = require("./v1/productRoute");
router.use('/v1', v1ReviewRoutes);
router.use('/v1', v1ProductRoutes);
module.exports = router;