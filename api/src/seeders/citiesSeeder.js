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
      "Cities",
      [
        { id: 1, name: 'Chưa có thông tin' },
        { id: 2, name: 'Đà Nẵng' },
        { id: 3, name: 'Hà Nội' },
        { id: 4, name: 'Hồ Chí Minh' },
        { id: 5, name: 'Cần Thơ' },
        { id: 6, name: 'Hải Phòng' },
        { id: 7, name: 'An Giang' },
        { id: 8, name: 'Bà Rịa-Vũng Tàu' },
        { id: 9, name: 'Bắc Giang' },
        { id: 10, name: 'Bắc Kạn' },
        { id: 11, name: 'Bạc Liêu' },
        { id: 12, name: 'Bắc Ninh' },
        { id: 13, name: 'Bến Tre' },
        { id: 14, name: 'Bình Định' },
        { id: 15, name: 'Bình Dương' },
        { id: 16, name: 'Bình Phước' },
        { id: 17, name: 'Bình Thuận' },
        { id: 18, name: 'Cà Mau' },
        { id: 19, name: 'Cao Bằng' },
        { id: 20, name: 'Đắk Lắk' },
        { id: 21, name: 'Đắk Nông' },
        { id: 22, name: 'Điện Biên' },
        { id: 23, name: 'Đồng Nai' },
        { id: 24, name: 'Đồng Tháp' },
        { id: 25, name: 'Gia Lai' },
        { id: 26, name: 'Hà Giang' },
        { id: 27, name: 'Hà Nam' },
        { id: 28, name: 'Hà Tĩnh' },
        { id: 29, name: 'Hải Dương' },
        { id: 30, name: 'Hậu Giang' },
        { id: 31, name: 'Hòa Bình' },
        { id: 32, name: 'Hưng Yên' },
        { id: 33, name: 'Khánh Hòa' },
        { id: 34, name: 'Kiên Giang' },
        { id: 35, name: 'Kon Tum' },
        { id: 36, name: 'Lai Châu' },
        { id: 37, name: 'Lâm Đồng' },
        { id: 38, name: 'Lạng Sơn' },
        { id: 39, name: 'Lào Cai' },
        { id: 40, name: 'Long An' },
        { id: 41, name: 'Nam Định' },
        { id: 42, name: 'Nghệ An' },
        { id: 43, name: 'Ninh Bình' },
        { id: 44, name: 'Ninh Thuận' },
        { id: 45, name: 'Phú Thọ' },
        { id: 46, name: 'Phú Yên' },
        { id: 47, name: 'Quảng Bình' },
        { id: 48, name: 'Quảng Nam' },
        { id: 49, name: 'Quảng Ngãi' },
        { id: 50, name: 'Quảng Ninh' },
        { id: 51, name: 'Quảng Trị' },
        { id: 52, name: 'Sóc Trăng' },
        { id: 53, name: 'Sơn La' },
        { id: 54, name: 'Tây Ninh' },
        { id: 55, name: 'Thái Bình' },
        { id: 56, name: 'Thái Nguyên' },
        { id: 57, name: 'Thanh Hóa' },
        { id: 58, name: 'Thừa Thiên Huế' },
        { id: 59, name: 'Tiền Giang' },
        { id: 60, name: 'Trà Vinh' },
        { id: 61, name: 'Tuyên Quang' },
        { id: 62, name: 'Vĩnh Long' },
        { id: 63, name: 'Vĩnh Phúc' },
        { id: 64, name: 'Yên Bái' },
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
