'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 테이블 이름
    await queryInterface.bulkInsert('member', [{
      id: 'test1',
      pw: '1234',
      nick: 'testnick1'
    }, {
      id: 'test2',
      pw: '1234',
      nick: 'testnick2'
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('member', null, {});

  }
};
