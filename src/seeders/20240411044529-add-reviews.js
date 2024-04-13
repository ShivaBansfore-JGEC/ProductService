'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        reviewId: 1,
        productId: 1,
        content: "This shirt is really nice and comfortable",
        rating: 4.5,
        reviewerName: "Abhishek dubey",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewId: 2,
        productId: 3,
        content: "This shirt is really nice!",
        rating: 4,
        reviewerName: "Manish Sharma",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        reviewId: 3,
        productId: 2,
        content: "The overall look of this shirt is really nice",
        rating: 4.8,
        reviewerName: "Ankit agarwal",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
