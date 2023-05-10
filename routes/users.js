const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Users } = require('../models');

// Get a list of users
router.get('/', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving users', error });
  }
});

// Get a user by id
router.get('/:id', async(req,res)=> {
  try {
    const user = await Users.findByPk(req.params.id);
    if(!user) {
      res.status(404).json({ message: 'User not found' })
    }
    else {
      res.json(user)
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
})

module.exports = router;
