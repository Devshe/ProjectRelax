const { default: mongoose } = require("mongoose");
const Activity = require("../models/activityModel");

//get all activities
const getActivities = async (req, res) => {
  const activities = await Activity.find({}).sort({ createdAt: -1 });

  res.status(200).json(activities);
};

//get single activity
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such activity" });
  }

  const activity = await Activity.findById(id);

  if (!activity) {
    return res.status(404).json({ error: "No such activity" });
  }
  res.status(200).json(activity);
};

//create new activity
const createActivity = async (req, res) => {
  const { mood, weather, type, title, description } = req.body;

  try {
    const activity = await Activity.create({
      mood,
      weather,
      type,
      title,
      description,
    });
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete an activity
const deleteActivity = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such activity" });
  }

  const activity = await Activity.findOneAndDelete({ _id: id });

  if (!activity) {
    return res.status(400).json({ error: "No such activity" });
  }
  res.status(200).json(activity);
};

//update an activity
const updateActivity = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such activity" });
  }

  const activity = await Activity.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!activity) {
    return res.status(404).json({ error: "No such activity" });
  }
  res.status(200).json(activity);
};

module.exports = {
  createActivity,
  getActivities,
  getSingleWorkout,
  deleteActivity,
  updateActivity,
};
