const express = require("express");
const index = require("../views/index");
const { addPage } = require("../views");
const router = express.Router();
console.log(index.addPage());
router.get("/", () => {});
router.post("/", () => {});
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
