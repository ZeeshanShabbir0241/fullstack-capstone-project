// app.js
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./util/db');

// Import routes
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mount API Routes
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes); // Required for Task 7

app.get('/', (req, res) => {
    res.send('GiftLink Backend Server Running');
});

connectToDatabase()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((e) => {
        console.error('Failed to connect to database', e);
    });

module.exports = app;