const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');
const { Therapists } = require('../models');

// Get a list of all therapists
router.get('/', async (req, res) => {
    try {
        const therapists = await Therapists.findAll();
        res.json(therapists);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving therapists', error });
    }
});
// Search through list of therapists
router.get('/search/:searchString', async (req, res) => {
    try {
        let searchString = req.params.searchString;
        const list = await Therapists.findAll({
            where: {specialties : {
                [Op.iLike]: '%' + searchString + '%'
            }}
        })
        res.json(list);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving searched therapist', err});
    }
})

// Get an therapist by ID
router.get('/:id', async (req, res) => {
    try {
        const therapist = await Therapists.findByPk(req.params.id);
        if (!therapist) {
            res.status(404).json({ message: 'Therapist not found' })
        }
        else {
            res.json(therapist)
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the therapist', error });
    }
});


module.exports = router;