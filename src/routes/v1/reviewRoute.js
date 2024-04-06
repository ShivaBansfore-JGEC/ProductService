const express = require("express");

const router = express.Router();

const { ReviewMiddleWare } = require("../../middlewares/index");
const { ReviewController } = require("../../controller/index");

router.get('/review', ReviewController.getAllReviews);
router.get('/review/:id', ReviewController.getReviews);
router.post('/review', ReviewMiddleWare.validateReview);
router.patch('/review/:id', ReviewController.updateReviews);
router.delete('/review/:id', ReviewController.deleteReviews);

module.exports = router;
