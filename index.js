const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { generateBotResponse } = require('./models/chatbot-model'); 

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));


app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = generateBotResponse(userMessage); 
    res.json({ response: botResponse });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
