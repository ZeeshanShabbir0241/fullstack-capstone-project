// authRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../util/db'); // Adjust path as needed

// POST /api/auth/login - Login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // Task 11 requirement: calls findOne to locate the user in the database
        const user = await collection.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Simple password validation check
        if (user.password !== password) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const authtoken = "sample_jwt_token_for_" + user.email;

        return res.json({
            authtoken,
            email: user.email,
            userName: user.firstName || user.name
        });
    } catch (e) {
        return res.status(500).json({ error: 'Server error: ' + e.message });
    }
});

module.exports = router;