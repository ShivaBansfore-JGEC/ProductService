'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products',
      [
        {
          productId: 1,
          name: "Solid H&M Shirt",
          description: "Solid black h&m casual shirt",
          price: 450,
          discount: 10,
          discountType: "Fixed",
          imageUrl: "https://picsum.photos/200/300",
          rating: 4.6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 2,
          name: "Solid Wrong Shirt",
          description: "Solid black wrong casual shirt",
          price: 600,
          discount: 10,
          discountType: "Fixed",
          imageUrl: "https://picsum.photos/200/300",
          rating: 4.6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productId: 3,
          name: "Solid White Shirt",
          description: "Solid white  casual shirt",
          price: 450,
          discount: 10,
          discountType: "Fixed",
          imageUrl: "https://picsum.photos/200/300",
          rating: 4.6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
      , {});
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
