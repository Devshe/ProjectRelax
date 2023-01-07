const express = require("express");

const router = express.Router();

//GET all activities
router.get("/", (req, res) => {
  res.json({ msg: "GET all activities" });
});

//GET single activity
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single activity" });
});

//Post single activity
router.post("/", (req, res) => {
  res.json({ msg: "Post a single activity" });
});

//DELETE single activity
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a single activity" });
});

//UPDATE an activity
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update  a single activity" });
});

module.exports = router;
