"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Requests",
      [
        {
          req_desc: "I'm looking to hire a plumber immediately",
          req_start_date: "09-15-2020",
          req_end_date: "09-20-2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1,
          tech_id: 1,
        },
        {
          req_desc: "any Carpenter to start next week",
          req_start_date: "09-20-2020",
          req_end_date: "09-30-2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 2,
          tech_id: 2,
        },
        {
          req_desc: "Need a nanny to help a sr. citizen",
          req_start_date: "09-20-2020",
          req_end_date: "09-30-2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 3,
          tech_id: 3,
        },
        {
          req_desc: "Searching a nanny fpr child-care",
          req_start_date: "10-02-2020",
          req_end_date: "10-30-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 4,
          tech_id: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
