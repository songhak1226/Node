'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('room', [{
      roomid: 'room1',
      title: '채팅방1',
      owner: 'admin'
    }, {
      roomid: 'room2',
      title: '채팅방2',
      owner: 'admin'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('room', null, {});
  }
};
