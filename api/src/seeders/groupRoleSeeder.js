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
      "Group_Role",
      [
        // Leader
        {
          groupId: 1,
          roleId: 1,
        },
        {
          groupId: 1,
          roleId: 2,
        },
        {
          groupId: 1,
          roleId: 3,
        },
        {
          groupId: 1,
          roleId: 4,
        },
        {
          groupId: 1,
          roleId: 5,
        },
        {
          groupId: 1,
          roleId: 6,
        },
        {
          groupId: 1,
          roleId: 7,
        },
        {
          groupId: 1,
          roleId: 8,
        },
        {
          groupId: 1,
          roleId: 9,
        },
        {
          groupId: 1,
          roleId: 10,
        },
        {
          groupId: 1,
          roleId: 11,
        },
        {
          groupId: 1,
          roleId: 12,
        },
        {
          groupId: 1,
          roleId: 13,
        },
        {
          groupId: 1,
          roleId: 14,
        },
        {
          groupId: 1,
          roleId: 15,
        },
        {
          groupId: 1,
          roleId: 16,
        },
        {
          groupId: 1,
          roleId: 17,
        },
        {
          groupId: 1,
          roleId: 18,
        },
        {
          groupId: 1,
          roleId: 19,
        },
        {
          groupId: 1,
          roleId: 20,
        },
        {
          groupId: 1,
          roleId: 21,
        },
        {
          groupId: 1,
          roleId: 22,
        },
        {
          groupId: 1,
          roleId: 23,
        },
        {
          groupId: 1,
          roleId: 24,
        },
        {
          groupId: 1,
          roleId: 25,
        },
        {
          groupId: 1,
          roleId: 26,
        },
        {
          groupId: 1,
          roleId: 27,
        },
        {
          groupId: 1,
          roleId: 28,
        },
        {
          groupId: 1,
          roleId: 29,
        },
        {
          groupId: 1,
          roleId: 30,
        },
        {
          groupId: 1,
          roleId: 31,
        },
        {
          groupId: 1,
          roleId: 32,
        },
        // Dev
        // {
        //   groupId: 2,
        //   roleId: 25,
        // },
        // {
        //   groupId: 2,
        //   roleId: 26,
        // },
        // {
        //   groupId: 2,
        //   roleId: 27,
        // },
        // {
        //   groupId: 2,
        //   roleId: 28,
        // },
        // Customer
        {
          groupId: 3,
          roleId: 3,
        },
        {
          groupId: 3,
          roleId: 29,
        },
        {
          groupId: 3,
          roleId: 30,
        },
        {
          groupId: 3,
          roleId: 31,
        },
        {
          groupId: 3,
          roleId: 32,
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
