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
      "Role",
      [
        // User
        {
          url: "/user/read",
          description: "User Read",
        },
        {
          url: "/user/create",
          description: "User Create",
        },
        {
          url: "/user/update",
          description: "User Update",
        },
        {
          url: "/user/delete",
          description: "User Delete",
        },
        // Group
        {
          url: "/group/read",
          description: "Group Read",
        },
        {
          url: "/group/create",
          description: "Group Create",
        },
        {
          url: "/group/update",
          description: "Group Update",
        },
        {
          url: "/group/delete",
          description: "Group Delete",
        },
        // Group Role
        {
          url: "/group-role/read",
          description: "Group Role Read",
        },
        {
          url: "/group-role/create",
          description: "Group Role Create",
        },
        {
          url: "/group-role/update",
          description: "Group Role Update",
        },
        {
          url: "/group-role/delete",
          description: "Group Role Delete",
        },
        // Role
        {
          url: "/role/read",
          description: "Role Read",
        },
        {
          url: "/role/create",
          description: "Role Create",
        },
        {
          url: "/role/update",
          description: "Role Update",
        },
        {
          url: "/role/delete",
          description: "Role Delete",
        },
        // Product
        {
          url: "/product/read",
          description: "Product Read",
        },
        {
          url: "/product/create",
          description: "Product Create",
        },
        {
          url: "/product/update",
          description: "Product Update",
        },
        {
          url: "/product/delete",
          description: "Product Delete",
        },
        // Categories
        {
          url: "/categories/read",
          description: "Category Read",
        },
        {
          url: "/categories/create",
          description: "Category Create",
        },
        {
          url: "/categories/update",
          description: "Category Update",
        },
        {
          url: "/categories/delete",
          description: "Category Delete",
        },
        // Cart
        {
          url: "/cart/read",
          description: "Cart Read",
        },
        {
          url: "/cart/create",
          description: "Cart Create",
        },
        {
          url: "/cart/update",
          description: "Cart Update",
        },
        {
          url: "/cart/delete",
          description: "Cart Delete",
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
