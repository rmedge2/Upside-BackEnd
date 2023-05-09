'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      id: 1,
      firstName: 'Susie',
      lastName: 'Quincy',
      email: 'susie.quincy@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      firstName: 'Duncan',
      lastName: 'Donuts',
      email: 'duncan.donuts@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      firstName: 'Mia',
      lastName: 'Scott',
      email: 'mia.scott@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      firstName: 'Oliver',
      lastName: 'Garcia',
      email: 'oliver.garcia@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      firstName: 'Emma',
      lastName: 'Nguyen',
      email: 'emma.nguyen@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 6,
      firstName: 'William',
      lastName: 'Lopez',
      email: 'william.lopez@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 7,
      firstName: 'Sophia',
      lastName: 'Phillips',
      email: 'sophia.phillips@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 8,
      firstName: 'Jacob',
      lastName: 'Turner',
      email: 'jacob.turner@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 9,
      firstName: 'Isabella',
      lastName: 'Wilson',
      email: 'isabella.wilson@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 10,
      firstName: 'Michael',
      lastName: 'Mitchell',
      email: 'michael.mitchell@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 11,
      firstName: 'Ava',
      lastName: 'Lee',
      email: 'ava.lee@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 12,
      firstName: 'Alexander',
      lastName: 'Clark',
      email: 'alexander.clark@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 13,
      firstName: 'Charlotte',
      lastName: 'Adams',
      email: 'charlotte.adams@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 14,
      firstName: 'Daniel',
      lastName: 'Campbell',
      email: 'daniel.campbell@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 15,
      firstName: 'Emily',
      lastName: 'Baker',
      email: 'emily.baker@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
