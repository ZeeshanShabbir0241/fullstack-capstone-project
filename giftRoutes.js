// giftRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../util/db'); // Adjust path as needed

// GET /api/gifts - Get all gifts
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (e) {
        res.status(500).send('Error fetching gifts: ' + e.message);
    }
});

// GET /api/gifts/:id - Get a single gift by ID
router.get('/:id', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const id = req.params.id;
        const gift = await collection.findOne({ id: id });

        if (!gift) {
            return res.status(404).send('Gift not found');
        }

        res.json(gift);
    } catch (e) {
        res.status(500).send('Error fetching gift details: ' + e.message);
    }
});

module.exports = router;