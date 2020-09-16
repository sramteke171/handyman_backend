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
          req_desc: "Any Carpenter to start next week??",
          req_start_date: "09-20-2020",
          req_end_date: "09-30-2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 2,
          tech_id: 2,
        },
        {
          req_desc: "Need  an electrician. Pls. contact me ASAP",
          req_start_date: "09-20-2020",
          req_end_date: "09-30-2020",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 3,
          tech_id: 3,
        },
        {
          req_desc:
            "Looking for a Roofer - to fix roofs of two houses in Quad Cities",
          req_start_date: "10-02-2020",
          req_end_date: "10-30-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 4,
          tech_id: 4,
        },
        {
          req_desc: "Need a car mechanic for BMW X3",
          req_start_date: "10-02-2020",
          req_end_date: "10-30-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 5,
          tech_id: 5,
        },
        {
          req_desc: "Any landscapers to start immediately?",
          req_start_date: "10-02-2020",
          req_end_date: "10-30-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 6,
          tech_id: 6,
        },
        {
          req_desc: "Need a Carpenter",
          req_start_date: "10-02-2020",
          req_end_date: "10-30-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 7,
          tech_id: 7,
        },
        {
          req_desc: "Need handyman for my house renovation",
          req_start_date: "10-02-2020",
          req_end_date: "10-30-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 8,
          tech_id: 8,
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
