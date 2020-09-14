const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const RequestModel = require("../models").Request;
const CategoryModel = require("../models").Category;

// GET ALL USERS
router.get("/", async (req, res) => {
  let users = await UserModel.findAll();
  res.json({ users });
});

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id, {
    include: CategoryModel,
  });
  res.json({ user });
});

// CREATE A NEW USER
router.post("/", async (req, res) => {
  let user = await UserModel.create(req.body);
  res.json({ user });
});

// // GET USER PROFILE - show profile page after lOGIN
// router.get("/profile/:id", (req, res) => {
//   UserModel.findByPk(req.params.id, {
//     include: [{ model: CategoryModel }],
//   }).then((userProfile) => {
//     CategoryModel.findAll().then((allCategories)=>{
//       res.redirect(`/users/profile/${newUser.id}`);
//      user: userProfile,
//      categories: allCategories,
//      });
//     });
//   });

//  //Getting USER and then associated City- show profile page after lOGIN
// // GET USER PROFILE - show profile page after lOGIN
// router.get("/profile/:id", (req, res) => {
//   UserModel.findByPk(req.params.id, {
//     include: [{ model: CityModel }],
//   }).then((userProfile) => {
//     CityModel.findAll().then((allCities) => {
//       console.log(userProfile);
//       res.render("users/profile.ejs", {
//         user: userProfile,
//         cities: allCities,
//       });
//     });
//   });
// });

// UPDATE A USER
router.put("/:id", async (req, res) => {
  let user = await UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A USER
router.delete("/:id", async (req, res) => {
  await UserModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`,
  });
});

module.exports = router;
