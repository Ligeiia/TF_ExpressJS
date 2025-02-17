// ? Version longue de l'import du système de routing
/*
const express = require('express');
const router = express().router();
*/

// ? Version courte
const router = require("express").Router();

let tasks = [];

// Route index, elle va servir à récupérer toutes les tâches
router.get("/", (req, res) => {
  res.status(200).json(tasks);
});

// Route de créaation, elle va servir à enregistrer une nouvelle tâche
router.post("/", (req, res) => {
  const { title } = req.body;

  const task = {
    id: tasks.length + 1,
    title, // => title: title
    completed: false,
  };

  tasks.push(task);

  // 201 created
  res.status(201).json(tasks);
});

module.exports = router;
