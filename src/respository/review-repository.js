
const { Review } = require("../models/index");


class ReviewRepository {

    async getAllReviews() {
        try {
            const response = await Review.findAll();
            return response;
        } catch (error) {
            console.log('something is wrong in repository layer!')
            throw (error);
        }
    }

    async getReviews(reviewId) {
        try {
            const results = await Review.findAll({
                where: {
                    reviewId: reviewId
                }
            })
            return results
        } catch (error) {
            throw (error)
        }
    }

    async createReviews(data) {
        try {
            const response = await Review.create(data);
            return response;
        } catch (error) {
            throw (error);
        }
    }

    async updateReviews(id, data) {
        try {
            const results = await Review.update(data, {
                where: {
                    reviewId: id
                }
            });
            return results;
        } catch (error) {
            throw (error);
        }
    }

    async deleteReviews(reviewId) {
        try {
            const entryToBeDeleted = await Review.findOne({
                where: {
                    reviewId: reviewId
                }
            });
            let result = null;
            if (entryToBeDeleted) {
                result = await entryToBeDeleted.destroy();
            }
            return result;
        } catch (error) {
            throw (error)
        }
    }


}

module.exports = ReviewRepository;