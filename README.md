
# 🤖 Chatbot Project

This project is a simple chatbot application built with HTML, CSS, and JavaScript for the frontend, and Node.js with Express for the backend. The chatbot is designed to interact with users by responding to their messages using predefined responses based on keywords.

## 🌟 Features

- User-friendly interface for chatting
- Responses to common user inputs
- Typing indicator for a more interactive experience
- Built with modern web technologies

## 🛠️ Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express
  - Body-parser
  - CORS
  - Natural Language Processing with the Natural library

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Umar9823/Chatbot
   cd chatbot-project
   ```

2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. Open `public/index.html` in your browser to start using the chatbot.

## 📁 Project Structure

```
/chatbot-project
├── models
│   └── chatbot-model.js         # Contains the logic for generating bot responses
├── public
│   ├── index.html               # Main HTML file for the chatbot interface
│   ├── script.js                # Frontend JavaScript logic
│   └── style.css                # CSS styles for the chatbot interface
├── .gitignore                   # Specifies files to ignore in git
├── index.js                     # Main entry point for the server
├── package.json                 # Defines project metadata and dependencies
└── package-lock.json            # Locks dependencies for consistent installs
```

## 🛠️ How It Works

1. **Frontend:**
   - The `index.html` file contains the basic structure of the chatbot interface.
   - `style.css` styles the chatbot, ensuring a clean and responsive layout.
   - `script.js` handles user input and interaction, sending messages to the server and displaying responses.

2. **Backend:**
   - The Express server listens for incoming POST requests at the `/chat` endpoint.
   - It uses the `generateBotResponse` function from `models/chatbot-model.js` to generate a response based on the user's input.

## 💬 Usage

- Type your message into the input box and click "Send" or press Enter to submit.
- The chatbot will respond based on the predefined responses or handle simple requests like asking for the current date or time.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please create an issue or submit a pull request.

