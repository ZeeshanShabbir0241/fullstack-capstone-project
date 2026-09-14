// sentiment/index.js
const express = require('express');
const natural = require('natural'); // Required for Task 8

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

// POST /sentiment - Sentiment analysis endpoint
app.post('/sentiment', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required for sentiment analysis' });
    }

    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer('English', stemmer, 'afinn');

    // Tokenize words using natural's WordTokenizer
    const tokenizer = new natural.WordTokenizer();
    const tokenizedText = tokenizer.tokenize(text);

    const score = analyzer.getSentiment(tokenizedText);

    let sentiment = 'neutral';
    if (score > 0) {
        sentiment = 'positive';
    } else if (score < 0) {
        sentiment = 'negative';
    }

    res.json({ sentiment, score });
});

app.listen(port, () => {
    console.log(`Sentiment service running on port ${port}`);
});