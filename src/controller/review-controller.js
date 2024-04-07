
const { StatusCodes } = require('http-status-codes')
const { ReviewService } = require("../services/index");
const reviewService = new ReviewService();
class ReviewController {
    constructor() {

    }

    async getAllReviews(req, res) {
        try {
            const results = await reviewService.getAllReviews();
            return res.status(StatusCodes.OK).json({
                data: results,
                message: "successfully fetched",
                success: true,
                status_code: 200,
                error: {}
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
                err: "Something went wrong!",
                data: {}
            })
        }
    }

    async getReviews(req, res) {
        try {
            const reviewId = req.params.id;
            console.log(reviewId)
            const results = await reviewService.getReviews(reviewId);
            return res.status(StatusCodes.OK).json({
                data: results,
                success: true,
                status_code: 200,
                error: {}
            })
        } catch (error) {
            return res.status(500).json({
                data: {},
                success: false,
                status_code: 500,
                error: {
                    message: "something went wrong"
                }
            })
        }
    }

    async createReviews(req, res) {
        try {
            const data = req.body;
            const results = await reviewService.createReviews(data);
            return res.status(StatusCodes.OK).json({
                data: results,
                success: true,
                status_code: 200,
                error: {}
            })
        } catch (error) {
            console.log("-->", error);
            return res.status(500).json({
                data: {},
                success: false,
                status_code: 500,
                error: {
                    message: "something went wrong"
                }
            })
        }
    }

    async updateReviews(req, res) {
        try {
            const reviewId = req?.params.id;
            const data = req.body;
            const results = await reviewService.updateReviews(reviewId, data);
            return res.status(StatusCodes.OK).json({
                data: results,
                status_code: 200,
                success: true,
                error: {}
            })

        } catch (error) {
            return res.status(500).json({
                error: {
                    message: "something went wrong!"
                },
                success: false,
                status_code: 500
            })
        }
    }

    async deleteReviews(req, res, next) {
        try {
            const reviewId = req?.params.id;
            const results = await reviewService.deleteReviews(reviewId);
            return res.status(StatusCodes.OK).json({
                data: results,
                status_code: 200,
                success: true,
                message: "deleted successfully",
                error: {}
            })

        } catch (error) {
            return res.status(500).json({
                error: {
                    message: "something went wrong!"
                },
                success: false,
                status_code: 500
            })
        }
    }
}




module.exports = ReviewController;