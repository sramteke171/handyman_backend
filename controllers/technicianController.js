const express = require("express");
const router = express.Router();

const TechnicianModel = require("../models").Technician;
const CategoryModel = require("../models").Category;
const RequestModel = require("../models").Request;

// GET ALL TECHNICIANS
router.get("/", async (req, res) => {
  let technicians = await TechnicianModel.findAll();
  res.json({ technicians });
});

// GET TECHNICIAN PROFILE
router.get("/profile/:id", async (req, res) => {
  let technician = await TechnicianModel.findByPk(req.params.id, {
    // include: RequestModel,
    // include: TechnicianModel,
  });
  res.json({ technician });
});

// CREATE A NEW TECHNICIAN
router.post("/", async (req, res) => {
  let technician = await TechnicianModel.create(req.body);
  res.json({ technician });
});

// UPDATE A TECHNICIAN
router.put("/:id", async (req, res) => {
  let technician = await TechnicianModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ technician });
});

// DELETE A TECHNICIAN
router.delete("/:id", async (req, res) => {
  await TechnicianModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`,
  });
});

module.exports = router;
