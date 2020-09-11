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
      "Technicians",
      [
        {
          name: "Roberto Mendoz",
          username: "roberto",
          password: "mendoz",
          age: 34,
          img: "/images/p1.jpg",
          phone: "309 - 422 - 8512",
          email: "roberto@yahoo.com",
          city: "Moline",
          state: "IL",
          address: "Moline, IL, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
          cat_id: 1,
        },
        {
          name: "Van Desilva",
          username: "van",
          password: `desilva`,
          age: 50,
          img: "/images/p2.jpg",
          phone: "456 - 789 - 6123",
          email: "brad@gmail.com",
          city: "Davenport",
          state: "IA",
          address: "Brady St. Davenport, IA, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
          cat_id: 1,
        },
        {
          name: "John Menards",
          username: "john",
          password: "menards",
          age: 38,
          img: "/images/c1.jpg",
          phone: "309 - 654 - 1143",
          email: "roberto@yahoo.com",
          city: "Rock Island",
          state: "IL",
          address: "Avenue of Cities, IL, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
          cat_id: 2,
        },
        {
          name: "Scott Lindquist",
          username: "scott",
          password: `lindquist`,
          age: 29,
          img: "/images/c2.jpg",
          phone: "563 - 765 - 8239",
          email: "scottL@gmail.com",
          city: "Bettendorf",
          state: "IA",
          address: "Pinebrook, Bettendorf, IA, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
          cat_id: 2,
        },
        {
          name: "Linda Jacob",
          username: "linda",
          password: "jacob",
          age: 40,
          img: "/images/n1.jpg",
          phone: "563 - 832 - 7492",
          email: "lindaJ@gmail.com",
          city: "Le Claire",
          state: "IA",
          address: "River road, Leclaire, IA, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
          cat_id: 3,
        },
        {
          name: "Sandy Post",
          username: "sandy",
          password: `post`,
          age: 31,
          img: "/images/n2.jpg",
          phone: "563 - 721 - 8491",
          email: "sandyP@gmail.com",
          city: "Bettendorf",
          state: "IA",
          address: "Middle Rd, Bettendorf, IA, USA",
          createdAt: new Date(),
          updatedAt: new Date(),
          cat_id: 3,
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
