document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    sendBtn.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            displayMessage(message, 'user');
            userInput.value = '';
            userInput.focus();

            const typingMessage = displayMessage('Chatbot is typing...', 'bot', true);
            
            
            setTimeout(() => {
                sendMessageToBot(message, typingMessage);
            }, 1000);
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    function displayMessage(text, sender, isTyping = false) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender} ${isTyping ? 'typing' : ''}`;
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        return messageElement; 
    }

    async function sendMessageToBot(message, typingMessage) {
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });
            const data = await response.json();

            typingMessage.textContent = data.response;
            typingMessage.classList.remove('typing'); 
        } catch (error) {
            typingMessage.textContent = "Sorry, I couldn't respond. Please try again.";
            typingMessage.classList.remove('typing');
            console.error('Error sending message:', error);
        }
    }

    document.getElementById('startChatBtn').addEventListener('click', function() {
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('chatContainer').style.display = 'block';
    });
});
