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
      "Product",
      [
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          image:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          capacity: 60,
          color: "black",
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
          brandId: 1,
        },
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          image:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          capacity: 60,
          color: "black",
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
          brandId: 1,
        },
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          image:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          capacity: 60,
          color: "black",
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
          brandId: 1,
        },
        {
          title: "Iphone 7",
          price: 5990000,
          version: "7",
          quantity: 10,
          image:
            '["https://res.cloudinary.com/daofedrqe/image/upload/v1710776924/blueprint_image_avatar/fcxbcf1xrzbrawtliteu.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776926/blueprint_image_avatar/szwohq4bot3pbozo0gpi.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776928/blueprint_image_avatar/c7dlmb3elxbdluwdnzss.png","https://res.cloudinary.com/daofedrqe/image/upload/v1710776930/blueprint_image_avatar/tbyxcdgmhui8lf1vv8fp.png"]',
          capacity: 60,
          color: "black",
          percentDiscount: 10,
          slug: "iphone-7",
          categoriesId: 1,
          brandId: 1,
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
