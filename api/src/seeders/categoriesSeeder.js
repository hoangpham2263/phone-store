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
      "Categories",
      [
        {
          name: "Nhà cấp 4",
          description: "nha-cap-4-dep",
        },
        {
          name: "Nhà phố",
          description: "nha-pho-dep",
        },
        {
          name: "Biệt thự",
          description: "mau-biet-thu-dep",
        },
        {
          name: "Khách sạn",
          description: "mau-khach-san-dep",
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
