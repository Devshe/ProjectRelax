const express = require("express");
const {
  createActivity,
  getActivities,
  getSingleWorkout,
  deleteActivity,
  updateActivity,
} = require("../controllers/activityController");

const router = express.Router();

//GET all activities
router.get("/", getActivities);

//GET single activity
router.get("/:id", getSingleWorkout);

//Post single activity
router.post("/", createActivity);

//DELETE single activity
router.delete("/:id", deleteActivity);

//UPDATE an activity
router.patch("/:id", updateActivity);

module.exports = router;
