const express = require("express");
const index = require("../views/index");
const { addPage } = require("../views");
const router = express.Router();
router.get("/", () => {});
router.post("/", (req, res) => {
  res.json(req.body);
});
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
