const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

// Extended response mapping based on keywords and common phrases
const responses = {
    hello: 'Hi there! How can I assist you today?',
    hi: 'Hello! How can I help you?',
    hey: 'Hey! What can I do for you?',
    bye: 'Goodbye! Have a great day!',
    goodbye: 'See you later! Take care!',
    name: 'I am your friendly chatbot.',
    help: 'Sure, I am here to help you. What do you need assistance with?',
    weather: "I'm not connected to a weather service, but I can still chat with you!",
    thanks: "You're welcome! Is there anything else I can do for you?",
    thank: "You're welcome! Glad I could help.",
    how: "I'm just a simple chatbot, trying to assist you!",
    who: "I am a chatbot created to assist you with basic tasks and chat.",
    joke: "Why don't scientists trust atoms? Because they make up everything!",
    hobby: "I like helping people and learning new things from our conversations.",
    creator: "I was created by a team of developers to assist you with questions.",
    love: "I don't have feelings, but I'm happy to chat with you!",
    food: "I don't eat, but if I could, I'd probably try some digital bytes!",
    favorite: "I don't have preferences, but I enjoy helping out!",
    default: "I'm sorry, I didn't quite understand that. Could you please rephrase?"
};

// Function to generate bot responses
function generateBotResponse(message) {
    const tokens = tokenizer.tokenize(message.toLowerCase());
    const lowerMessage = message.toLowerCase();

    // Handle date and time requests
    if (lowerMessage.includes("date")) {
        const currentDate = new Date().toLocaleDateString();
        return `Today's date is ${currentDate}.`;
    } else if (lowerMessage.includes("time")) {
        const currentTime = new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    }

    // Match user message with known keywords and respond
    for (let token of tokens) {
        if (responses[token]) {
            return responses[token];
        }
    }

    // Check for some basic phrases or multiple-word patterns
    if (lowerMessage.includes("how are you")) {
        return "I'm just a program, but I'm functioning as expected! How can I help you?";
    } else if (lowerMessage.includes("what is your name")) {
        return "I am your friendly chatbot, here to assist you!";
    } else if (lowerMessage.includes("tell me a joke")) {
        return responses.joke;
    } else if (lowerMessage.includes("thank you")) {
        return "You're very welcome! I'm here to help.";
    } else if (lowerMessage.includes("who created you")) {
        return responses.creator;
    } else if (lowerMessage.includes("do you have hobbies")) {
        return responses.hobby;
    } else if (lowerMessage.includes("do you love me")) {
        return responses.love;
    } else if (lowerMessage.includes("what is your favorite food")) {
        return responses.food;
    }

    // Default response if no keyword or phrase is matched
    return responses.default;
}

module.exports = { generateBotResponse };
