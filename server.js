const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

const PORT = 5000;

// Test whether the backend is running
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "KrishiMitra AI backend is running!"
  });
});

// Simple multilingual prototype responses
const answers = {
  en: {
    fertilizer: "Before applying fertilizer, check your Soil Health Card for N, P, K and pH values. Consider the crop, its growth stage, soil condition and recent rainfall. Avoid applying fertilizer just before heavy rain. Follow the recommended dose from your local agricultural officer or KVK.",
    potato: "Common potato diseases include late blight, early blight, black scurf and bacterial wilt. Look for unusual leaf spots, yellowing or wilting. A clear crop photograph can help with preliminary symptom checking, but confirm the diagnosis with an agricultural expert.",
    maize: "Common maize problems include fall armyworm, leaf blight and stem rot. Check the leaves and growing point regularly. Use locally recommended integrated pest management practices and consult your KVK if symptoms spread.",
    coffee: "Common coffee problems include coffee leaf rust, berry borer and black rot. Monitor leaves, berries and branches regularly. Management depends on the confirmed problem, weather and local recommendations.",
    soil: "Healthy soil management starts with a soil test. Check pH, nitrogen, phosphorus, potassium and organic carbon. Use the Soil Health Card or a recognised soil testing laboratory for reliable values.",
    weather: "Check the local weather forecast before irrigation or fertilizer application. Heavy rainfall can wash nutrients away. Avoid making farm decisions based only on a general forecast."
  },
  kn: {
    fertilizer: "ಗೊಬ್ಬರ ಹಾಕುವ ಮೊದಲು ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್‌ನಲ್ಲಿರುವ N, P, K ಮತ್ತು pH ಮೌಲ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ಬೆಳೆ, ಬೆಳವಣಿಗೆಯ ಹಂತ ಮತ್ತು ಮಣ್ಣಿನ ಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸಿ. ಭಾರಿ ಮಳೆಯ ಮುನ್ನ ಗೊಬ್ಬರ ಹಾಕಬೇಡಿ. ಸ್ಥಳೀಯ ಕೃಷಿ ಅಧಿಕಾರಿ ಅಥವಾ KVK ಸೂಚಿಸಿದ ಪ್ರಮಾಣವನ್ನು ಅನುಸರಿಸಿ.",
    potato: "ಆಲೂಗಡ್ಡೆಯಲ್ಲಿ ತಡ ಅಂಗಮಾರಿ, ಆರಂಭಿಕ ಅಂಗಮಾರಿ, ಕಪ್ಪು ಸ್ಕರ್ಫ್ ಮತ್ತು ಬ್ಯಾಕ್ಟೀರಿಯಲ್ ವಿಲ್ಟ್ ಮುಂತಾದ ಸಮಸ್ಯೆಗಳು ಕಂಡುಬರಬಹುದು. ಎಲೆಗಳ ಮೇಲಿನ ಕಲೆ, ಹಳದಿಯಾಗುವುದು ಅಥವಾ ಒಣಗುವುದನ್ನು ಗಮನಿಸಿ. ಖಚಿತ ರೋಗನಿರ್ಣಯಕ್ಕಾಗಿ ಕೃಷಿ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    maize: "ಮೆಕ್ಕೆಜೋಳದಲ್ಲಿ ಫಾಲ್ ಆರ್ಮಿವರ್ಮ್, ಎಲೆ ಅಂಗಮಾರಿ ಮತ್ತು ಕಾಂಡ ಕೊಳೆತ ಸಮಸ್ಯೆಗಳು ಕಂಡುಬರಬಹುದು. ಎಲೆಗಳು ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಭಾಗವನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ. ಸಮಸ್ಯೆ ಹೆಚ್ಚಾದರೆ KVK ಸಂಪರ್ಕಿಸಿ.",
    coffee: "ಕಾಫಿಯಲ್ಲಿ ಎಲೆ ತುಕ್ಕು ರೋಗ, ಬೆರ್ರಿ ಬೋರರ್ ಮತ್ತು ಕಪ್ಪು ಕೊಳೆತ ಸಮಸ್ಯೆಗಳು ಕಂಡುಬರಬಹುದು. ಎಲೆಗಳು, ಹಣ್ಣುಗಳು ಮತ್ತು ಕೊಂಬೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ. ಸ್ಥಳೀಯ ಕೃಷಿ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ.",
    soil: "ಮಣ್ಣಿನ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ. pH, ಸಾರಜನಕ, ರಂಜಕ, ಪೊಟ್ಯಾಸಿಯಂ ಮತ್ತು ಸಾವಯವ ಇಂಗಾಲದ ಮೌಲ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    weather: "ನೀರಾವರಿ ಅಥವಾ ಗೊಬ್ಬರ ಹಾಕುವ ಮೊದಲು ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ಭಾರಿ ಮಳೆಯ ಸಮಯದಲ್ಲಿ ಪೋಷಕಾಂಶಗಳು ಕೊಚ್ಚಿಹೋಗಬಹುದು."
  },
  hi: {
    fertilizer: "खाद डालने से पहले मृदा स्वास्थ्य कार्ड में N, P, K और pH मान जाँचें। फसल, उसकी वृद्धि अवस्था और मिट्टी की स्थिति को ध्यान में रखें। भारी बारिश से ठीक पहले खाद न डालें। स्थानीय कृषि अधिकारी या KVK की सलाह मानें।",
    potato: "आलू में पछेती झुलसा, अगेती झुलसा, ब्लैक स्कर्फ और बैक्टीरियल विल्ट जैसी समस्याएँ हो सकती हैं। पत्तियों पर धब्बे, पीलापन और मुरझाने के लक्षण देखें। सही पहचान के लिए कृषि विशेषज्ञ से सलाह लें।",
    maize: "मक्का में फॉल आर्मीवर्म, पत्ती झुलसा और तना सड़न जैसी समस्याएँ हो सकती हैं। पत्तियों और पौधे के बढ़ते हिस्से की नियमित जाँच करें। समस्या बढ़ने पर KVK से संपर्क करें।",
    coffee: "कॉफी में लीफ रस्ट, बेरी बोरर और ब्लैक रॉट जैसी समस्याएँ हो सकती हैं। पत्तियों, फलियों और शाखाओं की जाँच करें। स्थानीय कृषि विशेषज्ञ की सलाह लें।",
    soil: "मिट्टी की सेहत के लिए मिट्टी की जाँच कराएँ। pH, नाइट्रोजन, फॉस्फोरस, पोटैशियम और जैविक कार्बन के मान देखें।",
    weather: "सिंचाई या खाद डालने से पहले स्थानीय मौसम का पूर्वानुमान देखें। भारी बारिश में पोषक तत्व बह सकते हैं।"
  }
};

function getReply(message, language) {
  const text = message.toLowerCase();

  let category = "fertilizer";

  if (text.includes("potato") || text.includes("ಆಲೂ") || text.includes("आलू")) {
    category = "potato";
  } else if (text.includes("maize") || text.includes("corn") || text.includes("ಮೆಕ್ಕೆ") || text.includes("मक्का")) {
    category = "maize";
  } else if (text.includes("coffee") || text.includes("ಕಾಫಿ") || text.includes("कॉफी")) {
    category = "coffee";
  } else if (text.includes("soil") || text.includes("ಮಣ್ಣು") || text.includes("मिट्टी")) {
    category = "soil";
  } else if (text.includes("weather") || text.includes("rain") || text.includes("ಮಳೆ") || text.includes("बारिश")) {
    category = "weather";
  }

  const selectedLanguage = answers[language] ? language : "en";
  return answers[selectedLanguage][category];
}

// AI chat endpoint

app.post("/api/chat", (req, res) => {
    try {
        const message = req.body.message;
        const language = req.body.language || "en";

        if (!message || !message.trim()) {
            return res.status(400).json({
                success: false,
                reply: "Please enter a question."
            });
        }

        const reply = getReply(message, language);

        console.log("Question:", message);
        console.log("Language:", language);
        console.log("Answer:", reply);

        return res.status(200).json({
            success: true,
            answer: reply,
            reply: reply,
            response: reply
        });

    } catch (error) {
        console.error("Chat backend error:", error);

        return res.status(500).json({
            success: false,
            reply: "Something went wrong. Please try again."
        });
    }
});
app.listen(5000, () => {
    console.log("KrishiMitra AI server running on port 5000");
});