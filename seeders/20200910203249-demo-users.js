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
      "Users",
      [
        {
          name: "Sachin Ramteke",
          username: "sachin",
          password: "ramteke",
          age: 43,
          phone: "123 - 456 - 7890",
          email: "sachin@gmail.com",
          city: "Quad Cities",
          state: "IA",
          address: "Bettendorf, IA, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brad Smith",
          username: "brad",
          password: `smith`,
          age: 50,
          phone: "456 - 789 - 7123",
          email: "brad@gmail.com",
          city: "Davenport",
          state: "IA",
          address: "4462, Brady St. Davenport, IA, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Craig Adams",
          username: "craig",
          password: "adams",
          age: 70,
          phone: "567 - 890 - 1243",
          email: "craigA@gmail.com",
          city: "Moline",
          state: "IL",
          address: "Rock Island, IL, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
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
