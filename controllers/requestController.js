const express = require("express");
const router = express.Router();

const TechnicianModel = require("../models").Technician;
const UserModel = require("../models").User;
const RequestModel = require("../models").Request;

// GET ALL Requests
router.get("/", async (req, res) => {
  let requests = await RequestModel.findAll();
  res.json({ requests });
});

// GET request
router.get("/profile/:id", async (req, res) => {
  // router.get("/id", async (req, res) => {
  let request = await RequestModel.findByPk(req.params.id, {
    include: [{ model: UserModel, attributes: ["id", "name"] }],
    include: [{ model: RequestModel, attributes: ["id", "req_desc"] }],
    // include: RequestModel,
    // include: TechnicianModel,
  });
  res.json({ request });
});

// // GET ARTIST PROFILE
// router.get("/profile/:id", async (req, res) => {
//   let artist = await ArtistModel.findByPk(req.params.id, {
//     include: [{ model: UserModel, attributes: ["id", "name"] }],
//   });
//   res.json({ artist });
// });

// CREATE A NEW Request
router.post("/", async (req, res) => {
  let request = await RequestModel.create(req.body);
  res.json({ request });
});

// UPDATE A Request
router.put("/:id", async (req, res) => {
  let request = await RequestModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ request });
});

// DELETE A Request
router.delete("/:id", async (req, res) => {
  await RequestModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`,
  });
});

module.exports = router;
