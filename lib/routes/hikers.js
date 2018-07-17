const router = require('express').Router();
const Hikers = require('../models/hiker');

module.exports = router
    .post('/', (req, res) => {
        Hikers.create(req.body)
            .then(hiker => res.json(hiker));
    })

    .get('/', (req, res) => {
        Hikers.find()
            .then(hikers = res.json(hikers));
    });

    