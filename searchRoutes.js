// searchRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../util/db'); // Adjust path as needed

// GET /api/search - Search gifts with filters
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        
        let query = {};

        // Filter by name/keyword
        if (req.query.name && req.query.name.trim() !== '') {
            query.name = { $regex: req.query.name, $options: "i" };
        }

        // Filter by category
        if (req.query.category && req.query.category.trim() !== '') {
            query.category = req.query.category;
        }

        // Filter by condition
        if (req.query.condition && req.query.condition.trim() !== '') {
            query.condition = req.query.condition;
        }

        // Filter by age_years (less than or equal to)
        if (req.query.age_years && req.query.age_years.trim() !== '') {
            query.age_years = { $lte: parseInt(req.query.age_years) };
        }

        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (e) {
        res.status(500).send('Error searching gifts: ' + e.message);
    }
});

module.exports = router;