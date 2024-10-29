const natural = require('natural');


const responses = {
    hello: {
        en: 'Hi there! How can I assist you today?',
        hi: 'नमस्ते! आज मी तुमची कशी मदत करू?',
        mr: 'नमस्कार! आज तुम्हाला कशात मदत करू?',
        ur: 'ہیلو! میں آج آپ کی کس طرح مدد کر سکتا ہوں؟'
    },
    bye: {
        en: 'Goodbye! Have a great day!',
        hi: 'अलविदा! तुमचा दिवस चांगला जावा!',
        mr: 'गुडबाय! तुमचा दिवस छान जावा!',
        ur: 'الوداع! آپ کا دن اچھا گزرے!'
    },
    thanks: {
        en: "You're welcome! Is there anything else I can do for you?",
        hi: "तुमचं स्वागत आहे! तुमच्यासाठी आणखी काही आहे का?",
        mr: "तुमचं स्वागत आहे! तुम्हाला आणखी काही हवं आहे का?",
        ur: "آپ کا شکریہ! کیا میں آپ کے لیے کچھ اور کر سکتا ہوں؟"
    },
    default: {
        en: "I'm sorry, I didn't quite understand that. Could you please rephrase?",
        hi: 'माझी माफी करा, मला ते नीट समजले नाही. कृपया पुन्हा स्पष्ट करा?',
        mr: 'माझी माफी करा, मला ते नीट समजले नाही. कृपया पुन्हा स्पष्ट करा?',
        ur: "معاف کیجئے، میں اسے صحیح طور پر نہیں سمجھ سکا۔ کیا آپ براہ کرم دوبارہ بیان کر سکتے ہیں؟"
    },
    how_are_you: {
        en: "I'm just a program, but I'm functioning as expected! How can I help you?",
        hi: "मी एक प्रोग्राम आहे, पण मी अपेक्षेनुसार कार्यरत आहे! मी तुमच्यासाठी काय करू शकतो?",
        mr: "मी एक प्रोग्राम आहे, परंतु मी अपेक्षेनुसार कार्यरत आहे! तुम्हाला कशात मदत करू?",
        ur: "میں صرف ایک پروگرام ہوں، لیکن میں ٹھیک سے کام کر رہا ہوں! میں آپ کی کس طرح مدد کر سکتا ہوں؟"
    }
};


const messageMappings = {
    hello: ['hello', 'hi', 'नमस्ते', 'नमस्कार', 'ہیلو'],
    bye: ['bye', 'goodbye', 'अलविदा', 'गुडबाय', 'خدا حافظ', 'الوداع'],
    thanks: ['thanks', 'thank you', 'धन्यवाद', 'شکریہ', 'تھینک یو'],
    how_are_you: ['how are you', 'कसे आहात', 'आप کیسے ہیں', 'तुम्ही कसे आहात', 'आप کیسے ہو']
};


function detectLanguage(message) {
    if (/[नमस्ते|अलविदा|धन्यवाद|तुमची|माफ|कृपया]/.test(message)) return 'hi';
    if (/[नमस्कार|गुडबाय|मदत|पुनः|कशी]/.test(message)) return 'mr';
    if (/[ہیلو|خدا|شکریہ|معاف]/.test(message)) return 'ur';
    return 'en';
}


function generateBotResponse(message) {
    const detectedLanguage = detectLanguage(message);
    const lowerCaseMessage = message.toLowerCase();

    
    for (const [responseKey, phrases] of Object.entries(messageMappings)) {
        if (phrases.some(phrase => lowerCaseMessage.includes(phrase))) {
            return responses[responseKey][detectedLanguage] || responses[responseKey].en;
        }
    }

   
    if (/date/i.test(message)) {
        const currentDate = new Date().toLocaleDateString(detectedLanguage);
        return `Today's date is ${currentDate}.`;
    } else if (/time/i.test(message)) {
        const currentTime = new Date().toLocaleTimeString(detectedLanguage);
        return `The current time is ${currentTime}.`;
    }

 
    return responses.default[detectedLanguage] || responses.default.en;
}

module.exports = { generateBotResponse };
