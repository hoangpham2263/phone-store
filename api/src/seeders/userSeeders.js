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
      "User",
      [
        {
          // lastName: "fake",
          // firstName: "1",
          // email: "user@example.com",
          // password: "111111",
          // address: "Quảng Ngãi",
          // phone: "011111111",
          // sex: "male",
          // groupId: 1,
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
