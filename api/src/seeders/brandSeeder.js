"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "Brand",
      [
        // Mobile
        {
          name: "Iphone",
        },
        {
          name: "Samsung",
        },
        {
          name: "Ipad",
        },
        {
          name: "MacBook",
        },
        {
          name: "Lenovo",
        },
        {
          name: "Dell",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
