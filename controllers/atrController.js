const express = require('express');
const router = express.Router();
const attBL = require('../businessLogic/attractionBL');

// Get attractions
router.route('/')
    .get(async function (req, res) {
        const att = await attBL.getAttractions();
        res.json(att);
    })

module.exports = router;
