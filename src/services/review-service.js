
const ReviewRepository = require("../respository/review-repository");
const { ServiceError } = require("../utils/errors/index");
class ReviewService {
    constructor() {
        this.reviewRepository = new ReviewRepository();
    }

    async getAllReviews() {
        try {
            const reviews = this.reviewRepository.getAllReviews();
            return reviews;
        } catch (error) {
            throw (error);
        }
    }

    async getReviews(reviewId) {
        try {
            const response = await this.reviewRepository.getReviews(reviewId);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async createReviews(data) {
        try {
            const results = await this.reviewRepository.createReviews(data);
            return results;
        } catch (error) {
            throw (error);
        }
    }

    async updateReviews(reviewId, data) {
        try {
            const results = await this.reviewRepository.updateReviews(reviewId, data);
            return results;
        } catch (error) {
            throw (error);
        }
    }

    async deleteReviews(reviewId) {
        try {
            const results = await this.reviewRepository.deleteReviews(reviewId);
            return results;
        } catch (error) {
            throw (error);
        }
    }

}

module.exports = ReviewService;