const express = require("express");
const routes = express.Router();
const database = require("./data.js");

// Get all users
routes.get("/", (req, res) => {
  res.json(database);
});

// Get a specific user by ID
routes.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = database.find(x => x.id === userId);
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
});

// Create a new user
routes.post("/", (req, res) => {
  const newUser = {
    id: database.length + 1,
    name: req.body.name
  };
  database.push(newUser);
  res.json(newUser);
});

// Update user by ID
routes.put("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = database.findIndex(x => x.id === userId);

  if (userIndex !== -1) {
    database[userIndex] = { ...database[userIndex], ...req.body };
    res.json(database[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user by ID
routes.delete("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = database.findIndex(x => x.id === userId);

  if (userIndex !== -1) {
    const deletedUser = database.splice(userIndex, 1);
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = routes;
