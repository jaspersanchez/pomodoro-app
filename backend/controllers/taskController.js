// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = (req, res) => {
  res.status(200).json({ message: "Get tasks" });
};

// @desc    Set task
// @route   POST /api/tasks
// @access  Private
const setTask = (req, res) => {
  res.status(200).json({ message: "Set task" });
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = (req, res) => {
  res.status(200).json({ message: `Update task ${req.params.id}` });
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = (req, res) => {
  res.status(200).json({ message: `Delete task ${req.params.id}` });
};
module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
};
