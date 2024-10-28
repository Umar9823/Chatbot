const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { generateBotResponse } = require('./models/chatbot-model'); // Import the chatbot model

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Route for handling chatbot requests
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = generateBotResponse(userMessage); // Generate bot response
    res.json({ response: botResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
