const express = require('express');
const Cars = require('./cars-model')
const db = require('../data/db-config.js');

const router = express.Router();

router.get("/", (req, res) => {
    Cars.getAll()
    .then(cars =>{
        res.json(cars)
    })
    .catch(err =>{
        res.status(500).json({message: "Failed to get cars"})
    })
})

router.get("/:id", (req, res) =>{
    const {id} =req.params;

    db("cars")
    .where({ id })
    .then(cars => {
      const user = cars[0];

      if (car) {
        res.json(car);
      } else {
        res.status(404).json({ message: "Could not find car with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get car" });
    });
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    db("cars")
      .where({ id })
      .del()
      .then(count => {
        if (count) {
          res.json({ removed: count });
        } else {
          res.status(404).json({ message: "Could not find car with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete car" });
      });
  });