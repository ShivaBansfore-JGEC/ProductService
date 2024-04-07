const express = require("express");

const router = express.Router();

const { ReviewMiddleWare } = require("../../middlewares/index");
const { ReviewController } = require("../../controller/index");

const reviewController = new ReviewController();

router.get('/review', reviewController.getAllReviews);
router.get('/review/:id', reviewController.getReviews);
router.post('/review', ReviewMiddleWare.validateReview, reviewController.createReviews);
router.patch('/review/:id', reviewController.updateReviews);
router.delete('/review/:id', reviewController.deleteReviews);

module.exports = router;
