const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
//@desc Set APU
//@route CREATE /api
//@access Private
const setAPI = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("need a Text");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc Get APU
//@route READ /api
//@access Private
const getAPI = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

//@desc Update APU
//@route UPDATE(PUT) /api/:id
//@access Private
const updateAPI = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('Goal not Found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new : true});

  res.status(200).json(updatedGoal);
});

//@desc Delete APU
//@route DELETE /api/:id
//@access Private
const deleteAPI = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if(!goal){
    res.status(400)
    throw new Error('Goal not Found')
  }
  await goal.remove();

  res.status(200).json({ id : req.params.id });
});

module.exports = { getAPI, setAPI, updateAPI, deleteAPI };
