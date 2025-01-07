const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-schema");

router.post("/create", async (req, res) => {
  let owner = await ownerModel.find();
  if (owner.length > 0) {
    return res.status(500).send("You dont have permission to create new owner");
  }

  let { fullname, email, password } = req.body;
  let createOwner = await ownerModel.create({
    fullname,
    email,
    password,
  });
  res.status(201).send(createOwner);
});
router.get("/", (req, res) => {
  res.send("Hello World");
});
module.exports = router;
