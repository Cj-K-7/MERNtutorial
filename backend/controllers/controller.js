const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User = require("../models/userModel");
//@desc Set API
//@route HTTP CREATE /api
//@access Private
const setAPI = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("need a Text");
  }
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc Get API
//@route HTTP READ /api
//@access Private
const getAPI = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

//@desc Update API
//@route HTTP PUT /api/:id
//@access Private
const updateAPI = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Make suer the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

//@desc Delete API
//@route HTTP DELETE /api/:id
//@access Private
const deleteAPI = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not Found");
  }
  await goal.remove();

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  // Make suer the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = { getAPI, setAPI, updateAPI, deleteAPI };
