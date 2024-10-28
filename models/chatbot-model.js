const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

const responses = {
    hello: {
        en: 'Hi there! How can I assist you today?',
        hi: 'नमस्ते! आज मी तुमची कशी मदत करू?',
        mr: 'नमस्कार! आज तुम्हाला कशात मदत करू?',
        ur: 'ہیلو! میں آج آپ کی کس طرح مدد کر سکتا ہوں؟'
    },
    hi: {
        en: 'Hello! How can I help you?',
        hi: 'नमस्कार! मी तुम्हाला कशी मदत करू?',
        mr: 'नमस्कार! तुम्हाला कशात मदत करू?',
        ur: 'ہیلو! میں آپ کی کس طرح مدد کر سکتا ہوں؟'
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
    },
    what_is_your_name: {
        en: "I am your friendly chatbot, here to assist you!",
        hi: "मी तुमचा मित्रवत chatbot आहे, तुम्हाला मदत करण्यासाठी येथे आहे!",
        mr: "मी तुमचा मित्रवत chatbot आहे, तुमच्यासाठी मदत करण्यासाठी येथे आहे!",
        ur: "میں آپ کا دوستانہ چیٹ بوٹ ہوں، آپ کی مدد کرنے کے لیے یہاں ہوں!"
    },
    tell_me_a_joke: {
        en: "Why don't scientists trust atoms? Because they make up everything!",
        hi: "शास्त्रज्ञ अणूंवर का विश्वास ठेवत नाहीत? कारण ते सर्व काही तयार करतात!",
        mr: "शास्त्रज्ञ अणूंवर का विश्वास ठेवत नाहीत? कारण ते सर्व काही बनवतात!",
        ur: "سائنسدان ایٹمز پر کیوں بھروسہ نہیں کرتے؟ کیونکہ وہ سب کچھ بناتے ہیں!"
    },
    do_you_have_hobbies: {
        en: "I like helping people and learning new things from our conversations.",
        hi: "मला लोकांना मदत करायला आवडतं आणि आपल्या संभाषणांमधून नवीन गोष्टी शिकायला आवडतं.",
        mr: "मला लोकांना मदत करायला आवडतं आणि आपल्या संभाषणांमधून नवीन गोष्टी शिकायला आवडतं.",
        ur: "مجھے لوگوں کی مدد کرنا اور ہماری گفتگو سے نئی چیزیں سیکھنا پسند ہے۔"
    },
    who_created_you: {
        en: "I was created by a team of developers to assist you with questions.",
        hi: "माझी निर्मिती एक विकासक टीमने तुमच्या प्रश्नांना उत्तर देण्यासाठी केली.",
        mr: "माझी निर्मिती एक विकासक टीमने तुमच्यासाठी प्रश्नांची उत्तरे देण्यासाठी केली.",
        ur: "مجھے ایک ترقیاتی ٹیم نے آپ کے سوالات کا جواب دینے کے لیے بنایا تھا۔"
    },
    do_you_love_me: {
        en: "I don't have feelings, but I'm happy to chat with you!",
        hi: "माझ्या भावना नाहीत, पण तुमच्याशी गप्पा मारायला मला आनंद होतो!",
        mr: "माझ्याकडे भावना नाहीत, परंतु तुमच्याशी बोलायला मला आनंद होतो!",
        ur: "میرے پاس احساسات نہیں ہیں، لیکن میں آپ سے بات کرکے خوش ہوں!"
    },
    what_is_your_favorite_food: {
        en: "I don't eat, but if I could, I'd probably try some digital bytes!",
        hi: "मी खात नाही, पण जर मी खाणार असतो, तर मी कदाचित काही डिजिटल बाइट्स चाखून पाहीन!",
        mr: "मी खात नाही, पण जर मी खाणार असतो, तर मी कदाचित काही डिजिटल बाइट्स खाण्याचा प्रयत्न करेन!",
        ur: "میں کھاتا نہیں، لیکن اگر میں کھا سکتا تو شاید کچھ ڈیجیٹل بائٹس آزما لیتا!"
    },
    do_you_have_a_creator: {
        en: "Yes, I was created by skilled developers.",
        hi: "होय, माझी निर्मिती कुशल विकासकांनी केली आहे.",
        mr: "होय, माझी निर्मिती कुशल विकासकांनी केली आहे.",
        ur: "جی ہاں، مجھے ماہر ترقیاتی ٹیم نے بنایا تھا۔"
    },
    what_can_you_do: {
        en: "I can chat with you, provide information, and assist with basic tasks.",
        hi: "मी तुमच्याशी गप्पा मारू शकतो, माहिती देऊ शकतो, आणि मूलभूत कार्यांमध्ये मदत करू शकतो.",
        mr: "मी तुमच्याशी गप्पा मारू शकतो, माहिती देऊ शकतो, आणि मूलभूत कार्यांमध्ये मदत करू शकतो.",
        ur: "میں آپ سے بات کر سکتا ہوں، معلومات فراہم کر سکتا ہوں، اور بنیادی کاموں میں مدد کر سکتا ہوں۔"
    },
    help: {
        en: "Sure, I am here to help you. What do you need assistance with?",
        hi: "नक्कीच, मी तुमच्या मदतीसाठी येथे आहे. तुम्हाला कोणत्या गोष्टीसाठी मदतीची आवश्यकता आहे?",
        mr: "नक्कीच, मी तुमच्या मदतीसाठी येथे आहे. तुम्हाला कोणत्या गोष्टीसाठी मदतीची आवश्यकता आहे?",
        ur: "یقیناً، میں یہاں آپ کی مدد کے لیے ہوں۔ آپ کو کس چیز میں مدد کی ضرورت ہے؟"
    },
    how_old_are_you: {
        en: "I don't have an age, but I'm here to assist you anytime!",
        hi: "माझे वय नाही, पण मी तुम्हाला कधीही मदत करण्यासाठी येथे आहे!",
        mr: "माझे वय नाही, परंतु मी तुम्हाला कधीही मदत करण्यासाठी येथे आहे!",
        ur: "میرے پاس عمر نہیں ہے، لیکن میں آپ کی مدد کے لیے ہمیشہ حاضر ہوں!"
    },
};


const languageMapping = {
    en: ['hello', 'hi', 'bye', 'thanks'],
    hi: ['नमस्ते', 'अलविदा', 'धन्यवाद'],
    mr: ['नमस्कार', 'गुडबाय', 'धन्यवाद'],
    ur: ['ہیلو', 'خدا حافظ', 'شکریہ']
};

function detectLanguage(message) {
    const lowerMessage = message.toLowerCase();
    for (const lang in languageMapping) {
        for (const word of languageMapping[lang]) {
            if (lowerMessage.includes(word)) {
                return lang;
            }
        }
    }
    return 'en'; // Default to English
}

function generateBotResponse(message) {
    const tokens = tokenizer.tokenize(message.toLowerCase());
    const detectedLanguage = detectLanguage(message);
    
    // Check for date and time
    if (message.toLowerCase().includes("date")) {
        const currentDate = new Date().toLocaleDateString();
        return `Today's date is ${currentDate}.`;
    } else if (message.toLowerCase().includes("time")) {
        const currentTime = new Date().toLocaleTimeString();
        return `The current time is ${currentTime}.`;
    }

    for (let token of tokens) {
        if (responses[token] && responses[token][detectedLanguage]) {
            return responses[token][detectedLanguage];
        }
    }

    // Specific responses
    if (message.toLowerCase().includes("how are you")) {
        return detectedLanguage === 'hi' ? 
            "मैं एक प्रोग्राम हूँ, लेकिन मैं उम्मीद के अनुसार काम कर रहा हूँ!" :
            detectedLanguage === 'mr' ? 
            "मी एक प्रोग्राम आहे, परंतु मी अपेक्षेनुसार कार्यरत आहे!" :
            "I'm just a program, but I'm functioning as expected! How can I help you?";
    }

    return responses.default[detectedLanguage];
}

module.exports = { generateBotResponse };
