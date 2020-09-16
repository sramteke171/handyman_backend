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
      "Categories",
      [
        {
          name: "Plumber",
          cat_desc: "All plumbing related work",
        },
        {
          name: "Carpenter",
          cat_desc: "All carpenting related work",
        },
        {
          name: "Electrician",
          cat_desc: "Electricity related work",
        },
        {
          name: "Roofer",
          cat_desc: "House-roofs related work",
        },
        {
          name: "Landscaper",
          cat_desc: "Landscaping related work",
        },
        {
          name: "Car Mechanic",
          cat_desc: "Car repair and maintenance work",
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
