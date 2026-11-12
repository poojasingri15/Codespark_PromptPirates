
const API = "http://localhost:5000"; // Add backend URL here when backend is ready

// TRANSLATIONS
const translations = {
    en: {
        tagline:"AI FARMING ASSISTANT",
        overview:"▦ Overview",
        assistant:"✦ AI Assistant",
        soil:"◈ Soil Health",
        cropHealth:"⌁ Crop Health",
        weather:"☀ Weather",
        fertilizer:"♧ Fertilizer Advisory",
        dashboard:"Farmer Dashboard",
        workspace:"Workspace / Overview",
        smartAgri:"SMART AGRICULTURE · KARNATAKA",
        yourFarm:"Your farm,",
        smarter:"made smarter.",
        welcomeText:"AI-powered agricultural guidance for better farming decisions.",
        companion:"YOUR AI FARMING COMPANION",
        heroTitle:"Good decisions<br>grow better harvests.",
        heroText:"Understand your soil, identify crop symptoms and get informed farming guidance.",
        talk:"Talk to KrishiMitra →",
        tools:"YOUR FARMING TOOLS",
        whatToDo:"What would you like to do?",
        assistantName:"AI Assistant",
        assistantDesc:"Ask farming questions in your language.",
        soilName:"Soil Health",
        soilDesc:"Upload and analyse your soil report.",
        cropName:"Crop Health",
        cropDesc:"Upload crop images for symptom analysis.",
        weatherName:"Weather",
        weatherDesc:"Check weather conditions in your district.",
        personalSupport:"PERSONALIZED SUPPORT",
        farmProfile:"Your Farm Profile",
        district:"District",
        crop:"Crop",
        maize:"Maize",
        potato:"Potato",
        coffee:"Coffee",
        growthStage:"Growth Stage",
        beforeSowing:"Before sowing",
        earlyGrowth:"Early growth",
        vegetative:"Vegetative stage",
        flowering:"Flowering stage",
        harvest:"Harvest stage",
        farmSize:"Farm Size (acres)",
        farmPlaceholder:"e.g. 2",
        saveProfile:"Save Farm Profile",
        intelligentSupport:"INTELLIGENT FARMING SUPPORT",
        assistantTitle:"KrishiMitra AI Assistant",
        multilingual:"Multilingual agricultural assistant",
        online:"READY",
        greeting:"Namaste! I am KrishiMitra AI. Ask me about your crops, soil health, fertilizer management or farming practices.",
        suggest1:"Improve soil health",
        suggest2:"Fertilizer guidance",
        suggest3:"Crop diseases",
        questionPlaceholder:"Ask your farming question...",
        send:"Send ↑",
        expertNote:"Verify important agricultural decisions with local experts.",
        soilIntelligence:"SOIL INTELLIGENCE",
        soilTitle:"Soil Health Card Analysis",
        uploadSoil:"Upload Soil Health Card",
        soilUploadDesc:"Upload your soil report for OCR-based extraction.",
        noFile:"No file selected",
        analyseSoil:"Analyse Soil Report",
        manualSoil:"Enter Soil Test Values Manually",
        saveSoil:"Save Soil Values",
        cropObservation:"CROP OBSERVATION",
        cropTitle:"Crop Health Detection",
        uploadCrop:"Upload Crop Image",
        cropUploadDesc:"Upload a clear picture of the affected crop or leaf.",
        analyseCrop:"Analyse Crop Image",
        cropNote:"AI image analysis provides possible symptoms, not a confirmed diagnosis.",
        weatherAwareness:"WEATHER AWARENESS",
        weatherTitle:"Local Weather Advisory",
        refresh:"Refresh ↻",
        currentConditions:"CURRENT CONDITIONS",
        humidity:"Humidity",
        rainfall:"Rainfall",
        wind:"Wind Speed",
        weatherNote:"Weather uses an approximate district reference location, not a farm-level sensor.",
        nutrientManagement:"SUSTAINABLE NUTRIENT MANAGEMENT",
        fertilizerTitle:"Fertilizer Recommendation",
        personalAdvisory:"Personalized Fertilizer Advisory",
        fertilizerDesc:"Generate guidance using your crop, growth stage and soil test values.",
        generate:"Generate Recommendation →",
        fertilizerNote:"Exact fertilizer quantities must be based on verified Karnataka agricultural recommendations and soil test interpretation.",
        footer:"🌱 KrishiMitra AI | Smart Farming for a Better Tomorrow"
    },

    kn: {
        tagline:"AI ಕೃಷಿ ಸಹಾಯಕ",
        overview:"▦ ಅವಲೋಕನ",
        assistant:"✦ AI ಸಹಾಯಕ",
        soil:"◈ ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
        cropHealth:"⌁ ಬೆಳೆ ಆರೋಗ್ಯ",
        weather:"☀ ಹವಾಮಾನ",
        fertilizer:"♧ ರಸಗೊಬ್ಬರ ಸಲಹೆ",
        dashboard:"ರೈತರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        workspace:"ಕಾರ್ಯಸ್ಥಳ / ಅವಲೋಕನ",
        smartAgri:"ಸ್ಮಾರ್ಟ್ ಕೃಷಿ · ಕರ್ನಾಟಕ",
        yourFarm:"ನಿಮ್ಮ ಕೃಷಿ,",
        smarter:"ಇನ್ನಷ್ಟು ಸ್ಮಾರ್ಟ್.",
        welcomeText:"ಉತ್ತಮ ಕೃಷಿ ನಿರ್ಧಾರಗಳಿಗಾಗಿ AI ಆಧಾರಿತ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ.",
        companion:"ನಿಮ್ಮ AI ಕೃಷಿ ಸಹಾಯಕ",
        heroTitle:"ಉತ್ತಮ ನಿರ್ಧಾರಗಳು<br>ಉತ್ತಮ ಫಸಲನ್ನು ನೀಡುತ್ತವೆ.",
        heroText:"ನಿಮ್ಮ ಮಣ್ಣನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ಬೆಳೆ ಲಕ್ಷಣಗಳನ್ನು ಗುರುತಿಸಿ ಮತ್ತು ಕೃಷಿ ಸಲಹೆ ಪಡೆಯಿರಿ.",
        talk:"ಕೃಷಿಮಿತ್ರ ಜೊತೆ ಮಾತನಾಡಿ →",
        tools:"ನಿಮ್ಮ ಕೃಷಿ ಉಪಕರಣಗಳು",
        whatToDo:"ನೀವು ಏನು ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?",
        assistantName:"AI ಸಹಾಯಕ",
        assistantDesc:"ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಕೃಷಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.",
        soilName:"ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
        soilDesc:"ನಿಮ್ಮ ಮಣ್ಣಿನ ವರದಿಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ವಿಶ್ಲೇಷಿಸಿ.",
        cropName:"ಬೆಳೆ ಆರೋಗ್ಯ",
        cropDesc:"ಲಕ್ಷಣಗಳ ವಿಶ್ಲೇಷಣೆಗೆ ಬೆಳೆ ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        weatherName:"ಹವಾಮಾನ",
        weatherDesc:"ನಿಮ್ಮ ಜಿಲ್ಲೆಯ ಹವಾಮಾನವನ್ನು ಪರಿಶೀಲಿಸಿ.",
        personalSupport:"ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ",
        farmProfile:"ನಿಮ್ಮ ಕೃಷಿ ವಿವರಗಳು",
        district:"ಜಿಲ್ಲೆ",
        crop:"ಬೆಳೆ",
        maize:"ಮೆಕ್ಕೆಜೋಳ",
        potato:"ಆಲೂಗಡ್ಡೆ",
        coffee:"ಕಾಫಿ",
        growthStage:"ಬೆಳವಣಿಗೆಯ ಹಂತ",
        beforeSowing:"ಬಿತ್ತನೆಗೆ ಮೊದಲು",
        earlyGrowth:"ಆರಂಭಿಕ ಬೆಳವಣಿಗೆ",
        vegetative:"ಸಸ್ಯ ಬೆಳವಣಿಗೆಯ ಹಂತ",
        flowering:"ಹೂಬಿಡುವ ಹಂತ",
        harvest:"ಕೊಯ್ಲಿನ ಹಂತ",
        farmSize:"ಕೃಷಿ ಭೂಮಿಯ ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)",
        farmPlaceholder:"ಉದಾ. 2",
        saveProfile:"ಕೃಷಿ ವಿವರಗಳನ್ನು ಉಳಿಸಿ",
        intelligentSupport:"ಬುದ್ಧಿವಂತ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ",
        assistantTitle:"ಕೃಷಿಮಿತ್ರ AI ಸಹಾಯಕ",
        multilingual:"ಬಹುಭಾಷಾ ಕೃಷಿ ಸಹಾಯಕ",
        online:"ಸಿದ್ಧವಾಗಿದೆ",
        greeting:"ನಮಸ್ಕಾರ! ನಾನು ಕೃಷಿಮಿತ್ರ AI. ನಿಮ್ಮ ಬೆಳೆಗಳು, ಮಣ್ಣಿನ ಆರೋಗ್ಯ, ರಸಗೊಬ್ಬರ ನಿರ್ವಹಣೆ ಅಥವಾ ಕೃಷಿ ಪದ್ಧತಿಗಳ ಬಗ್ಗೆ ಕೇಳಿ.",
        suggest1:"ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಸುಧಾರಣೆ",
        suggest2:"ರಸಗೊಬ್ಬರ ಮಾರ್ಗದರ್ಶನ",
        suggest3:"ಬೆಳೆ ರೋಗಗಳು",
        questionPlaceholder:"ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...",
        send:"ಕಳುಹಿಸಿ ↑",
        expertNote:"ಪ್ರಮುಖ ಕೃಷಿ ನಿರ್ಧಾರಗಳನ್ನು ಸ್ಥಳೀಯ ತಜ್ಞರೊಂದಿಗೆ ಪರಿಶೀಲಿಸಿ.",
        soilIntelligence:"ಮಣ್ಣಿನ ಮಾಹಿತಿ",
        soilTitle:"ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ವಿಶ್ಲೇಷಣೆ",
        uploadSoil:"ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        soilUploadDesc:"ಮಾಹಿತಿ ಹೊರತೆಗೆಯಲು ನಿಮ್ಮ ಮಣ್ಣಿನ ವರದಿಯನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        noFile:"ಯಾವುದೇ ಫೈಲ್ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ",
        analyseSoil:"ಮಣ್ಣಿನ ವರದಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
        manualSoil:"ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ಮೌಲ್ಯಗಳನ್ನು ಕೈಯಾರೆ ನಮೂದಿಸಿ",
        saveSoil:"ಮಣ್ಣಿನ ಮೌಲ್ಯಗಳನ್ನು ಉಳಿಸಿ",
        cropObservation:"ಬೆಳೆ ವೀಕ್ಷಣೆ",
        cropTitle:"ಬೆಳೆ ಆರೋಗ್ಯ ಪತ್ತೆ",
        uploadCrop:"ಬೆಳೆ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        cropUploadDesc:"ಬಾಧಿತ ಬೆಳೆ ಅಥವಾ ಎಲೆಯ ಸ್ಪಷ್ಟ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        analyseCrop:"ಬೆಳೆ ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
        cropNote:"AI ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ ಸಂಭವನೀಯ ಲಕ್ಷಣಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ; ಇದು ಖಚಿತ ರೋಗನಿರ್ಣಯವಲ್ಲ.",
        weatherAwareness:"ಹವಾಮಾನ ಮಾಹಿತಿ",
        weatherTitle:"ಸ್ಥಳೀಯ ಹವಾಮಾನ ಸಲಹೆ",
        refresh:"ಮತ್ತೆ ತಾಜಾಗೊಳಿಸಿ ↻",
        currentConditions:"ಪ್ರಸ್ತುತ ಪರಿಸ್ಥಿತಿಗಳು",
        humidity:"ಆರ್ದ್ರತೆ",
        rainfall:"ಮಳೆ",
        wind:"ಗಾಳಿಯ ವೇಗ",
        weatherNote:"ಹವಾಮಾನ ಮಾಹಿತಿಯು ಜಿಲ್ಲೆಯ ಅಂದಾಜು ಸ್ಥಳವನ್ನು ಆಧರಿಸಿದೆ; ಇದು ಹೊಲದ ಸೆನ್ಸರ್‌ನ ಮಾಹಿತಿ ಅಲ್ಲ.",
        nutrientManagement:"ಸುಸ್ಥಿರ ಪೋಷಕಾಂಶ ನಿರ್ವಹಣೆ",
        fertilizerTitle:"ರಸಗೊಬ್ಬರ ಶಿಫಾರಸು",
        personalAdvisory:"ವೈಯಕ್ತಿಕ ರಸಗೊಬ್ಬರ ಸಲಹೆ",
        fertilizerDesc:"ನಿಮ್ಮ ಬೆಳೆ, ಬೆಳವಣಿಗೆಯ ಹಂತ ಮತ್ತು ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ಮೌಲ್ಯಗಳನ್ನು ಬಳಸಿ ಸಲಹೆ ಪಡೆಯಿರಿ.",
        generate:"ಶಿಫಾರಸು ಪಡೆಯಿರಿ →",
        fertilizerNote:"ರಸಗೊಬ್ಬರದ ನಿಖರ ಪ್ರಮಾಣವು ಪರಿಶೀಲಿಸಿದ ಕರ್ನಾಟಕ ಕೃಷಿ ಶಿಫಾರಸುಗಳು ಮತ್ತು ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯನ್ನು ಆಧರಿಸಿರಬೇಕು.",
        footer:"🌱 ಕೃಷಿಮಿತ್ರ AI | ಉತ್ತಮ ನಾಳೆಗಾಗಿ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ"
    },

    hi: {
        tagline:"AI कृषि सहायक",
        overview:"▦ अवलोकन",
        assistant:"✦ AI सहायक",
        soil:"◈ मिट्टी का स्वास्थ्य",
        cropHealth:"⌁ फसल का स्वास्थ्य",
        weather:"☀ मौसम",
        fertilizer:"♧ उर्वरक सलाह",
        dashboard:"किसान डैशबोर्ड",
        workspace:"कार्यस्थान / अवलोकन",
        smartAgri:"स्मार्ट कृषि · कर्नाटक",
        yourFarm:"आपका खेत,",
        smarter:"अब और स्मार्ट।",
        welcomeText:"बेहतर खेती के निर्णयों के लिए AI आधारित कृषि मार्गदर्शन।",
        companion:"आपका AI कृषि साथी",
        heroTitle:"अच्छे निर्णय<br>बेहतर फसल देते हैं।",
        heroText:"मिट्टी को समझें, फसल के लक्षण पहचानें और कृषि मार्गदर्शन पाएं।",
        talk:"कृषिमित्र से बात करें →",
        tools:"आपके कृषि उपकरण",
        whatToDo:"आप क्या करना चाहेंगे?",
        assistantName:"AI सहायक",
        assistantDesc:"अपनी भाषा में खेती से जुड़े सवाल पूछें।",
        soilName:"मिट्टी का स्वास्थ्य",
        soilDesc:"अपनी मिट्टी की रिपोर्ट अपलोड करें और विश्लेषण करें।",
        cropName:"फसल का स्वास्थ्य",
        cropDesc:"लक्षणों के विश्लेषण के लिए फसल की तस्वीरें अपलोड करें।",
        weatherName:"मौसम",
        weatherDesc:"अपने जिले का मौसम देखें।",
        personalSupport:"व्यक्तिगत सहायता",
        farmProfile:"आपके खेत की जानकारी",
        district:"जिला",
        crop:"फसल",
        maize:"मक्का",
        potato:"आलू",
        coffee:"कॉफ़ी",
        growthStage:"विकास का चरण",
        beforeSowing:"बुवाई से पहले",
        earlyGrowth:"प्रारंभिक विकास",
        vegetative:"वानस्पतिक अवस्था",
        flowering:"फूल आने की अवस्था",
        harvest:"कटाई की अवस्था",
        farmSize:"खेत का क्षेत्रफल (एकड़)",
        farmPlaceholder:"जैसे 2",
        saveProfile:"खेत की जानकारी सहेजें",
        intelligentSupport:"बुद्धिमान कृषि सहायता",
        assistantTitle:"कृषिमित्र AI सहायक",
        multilingual:"बहुभाषी कृषि सहायक",
        online:"तैयार",
        greeting:"नमस्ते! मैं कृषिमित्र AI हूँ। अपनी फसलों, मिट्टी के स्वास्थ्य, उर्वरक प्रबंधन या खेती के तरीकों के बारे में पूछें।",
        suggest1:"मिट्टी का स्वास्थ्य सुधारें",
        suggest2:"उर्वरक मार्गदर्शन",
        suggest3:"फसल के रोग",
        questionPlaceholder:"अपना कृषि प्रश्न पूछें...",
        send:"भेजें ↑",
        expertNote:"महत्वपूर्ण कृषि निर्णयों की पुष्टि स्थानीय विशेषज्ञों से करें।",
        soilIntelligence:"मिट्टी की जानकारी",
        soilTitle:"मृदा स्वास्थ्य कार्ड विश्लेषण",
        uploadSoil:"मृदा स्वास्थ्य कार्ड अपलोड करें",
        soilUploadDesc:"OCR द्वारा जानकारी निकालने के लिए मिट्टी की रिपोर्ट अपलोड करें।",
        noFile:"कोई फ़ाइल नहीं चुनी गई",
        analyseSoil:"मिट्टी की रिपोर्ट का विश्लेषण करें",
        manualSoil:"मिट्टी की जांच के मान स्वयं दर्ज करें",
        saveSoil:"मिट्टी के मान सहेजें",
        cropObservation:"फसल निरीक्षण",
        cropTitle:"फसल स्वास्थ्य पहचान",
        uploadCrop:"फसल की तस्वीर अपलोड करें",
        cropUploadDesc:"प्रभावित फसल या पत्ती की स्पष्ट तस्वीर अपलोड करें।",
        analyseCrop:"फसल की तस्वीर का विश्लेषण करें",
        cropNote:"AI तस्वीर का विश्लेषण संभावित लक्षण बताता है, निश्चित निदान नहीं।",
        weatherAwareness:"मौसम की जानकारी",
        weatherTitle:"स्थानीय मौसम सलाह",
        refresh:"रीफ़्रेश ↻",
        currentConditions:"वर्तमान स्थिति",
        humidity:"नमी",
        rainfall:"वर्षा",
        wind:"हवा की गति",
        weatherNote:"मौसम की जानकारी जिले के अनुमानित स्थान पर आधारित है, खेत के सेंसर पर नहीं।",
        nutrientManagement:"टिकाऊ पोषक तत्व प्रबंधन",
        fertilizerTitle:"उर्वरक की सिफारिश",
        personalAdvisory:"व्यक्तिगत उर्वरक सलाह",
        fertilizerDesc:"अपनी फसल, विकास के चरण और मिट्टी जांच के मानों से सलाह प्राप्त करें।",
        generate:"सिफारिश प्राप्त करें →",
        fertilizerNote:"उर्वरक की सही मात्रा सत्यापित कर्नाटक कृषि सिफारिशों और मिट्टी जांच पर आधारित होनी चाहिए।",
        footer:"🌱 कृषिमित्र AI | बेहतर कल के लिए स्मार्ट खेती"
    }
};

let currentLanguage = "en";

function t(key) {
    return translations[currentLanguage][key] ||
           translations.en[key] || key;
}

// APPLY LANGUAGE
function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "en";

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder =
            translations[currentLanguage][key] ||
            translations.en[key] || "";
    });

    document.getElementById("voiceBtn").title =
        currentLanguage === "kn" ? "ಧ್ವನಿ ಇನ್‌ಪುಟ್" :
        currentLanguage === "hi" ? "आवाज़ से इनपुट" :
        "Voice input";

    try {
        localStorage.setItem("krishimitra-language", currentLanguage);
    } catch (error) {}

    // Update the initial greeting if chat is still empty
    const chat = document.getElementById("chatMessages");
    if (chat && chat.children.length === 1 &&
        chat.children[0].classList.contains("bot-message")) {
        chat.children[0].textContent = t("greeting");
    }

    updateWeatherLabels();
}

const languageSelect = document.getElementById("language");

try {
    const saved = localStorage.getItem("krishimitra-language");
    if (saved && translations[saved]) {
        languageSelect.value = saved;
    }
} catch (error) {}

applyLanguage(languageSelect.value);

languageSelect.addEventListener("change", () => {
    applyLanguage(languageSelect.value);
});

// MOBILE MENU
document.getElementById("menuBtn").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
});

document.querySelectorAll(".sidebar nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".sidebar").classList.remove("open");
    });
});

// DATE
document.getElementById("today").textContent =
    new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

// TOAST
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 3000);
}

// API REQUEST HELPER
async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API}${endpoint}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...options.headers
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}

// FARM PROFILE
document.getElementById("farmForm").addEventListener("submit", async event => {
    event.preventDefault();

    const profile = {
        district: document.getElementById("district").value,
        crop: document.getElementById("cropSelect").value,
        stage: document.getElementById("stage").value,
        farm_size: document.getElementById("farmSize").value
    };

    try {
        await apiRequest("/api/farm/profile", "POST", profile);
        document.getElementById("farmStatus").textContent =
            "Farm profile saved successfully.";
    } catch (error) {
        document.getElementById("farmStatus").textContent =
            "Backend unavailable. Profile is not saved to the server.";
    }
});

// CHATBOT

// CHATBOT

function addMessage(message, type) {
    const chat = document.getElementById("chatMessages");
    const div = document.createElement("div");

    div.className = type === "user"
        ? "user-message"
        : "bot-message";

    div.textContent = message;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

async function sendQuestion(question) {
    if (!question.trim()) return;

    addMessage(question, "user");

    const sendBtn = document.getElementById("sendBtn");
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    try {
        const result = await apiRequest("/api/chat", {
            method: "POST",
            body: JSON.stringify({
                message: question,
                language: currentLanguage,
                district: document.getElementById("district").value,
                crop: document.getElementById("cropSelect").value
            })
        });

        addMessage(
            result.reply || result.response || result.answer ||
            "No response received.",
            "bot"
        );

    } catch (error) {
        console.error("Chat error:", error);
        addMessage("Unable to connect. Please try again.", "bot");

    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = t("send");
    }
}

const chatForm = document.getElementById("chatForm");
const questionInput = document.getElementById("question");

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const question = questionInput.value.trim();

    if (!question) return;

    questionInput.value = "";
    sendQuestion(question);
});

// Suggested questions
document.querySelectorAll("[data-question]").forEach(button => {
    button.addEventListener("click", () => {
        sendQuestion(button.dataset.question);
    });
});

// VOICE INPUT
document.getElementById("voiceBtn").addEventListener("click", () => {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        showToast("Speech recognition is not supported in this browser.");
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang =
        currentLanguage === "kn" ? "kn-IN" :
        currentLanguage === "hi" ? "hi-IN" : "en-IN";

    recognition.start();

    recognition.onresult = event => {
        document.getElementById("question").value =
            event.results[0][0].transcript;
    };

    recognition.onerror = () => {
        showToast("Voice recognition failed. Please try again.");
    };
});

// SOIL FILE NAME
document.getElementById("soilFile").addEventListener("change", event => {
    const file = event.target.files[0];

    document.getElementById("soilFileName").textContent =
        file ? file.name : t("noFile");
});

// SOIL REPORT UPLOAD
document.getElementById("soilBtn").addEventListener("click", async () => {
    const file = document.getElementById("soilFile").files[0];

    if (!file) {
        showToast("Please select a soil report first.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const result = await apiRequest("/api/soil/analyze", "POST", formData);

        const output = document.getElementById("soilResult");
        output.hidden = false;
        output.textContent = result.analysis || result.message ||
            JSON.stringify(result, null, 2);
    } catch (error) {
        showToast("Soil analysis backend is unavailable.");
    }
});

// SAVE SOIL VALUES
document.getElementById("saveSoil").addEventListener("click", async () => {
    const soil = {
        nitrogen: document.getElementById("nitrogen").value,
        phosphorus: document.getElementById("phosphorus").value,
        potassium: document.getElementById("potassium").value,
        ph: document.getElementById("ph").value,
        organic_carbon: document.getElementById("organicCarbon").value
    };

    if (Object.values(soil).every(value => value === "")) {
        showToast("Please enter at least one soil value.");
        return;
    }

    try {
        await apiRequest("/api/soil/values", "POST", soil);
        document.getElementById("soilStatus").textContent =
            "Soil values saved successfully.";
    } catch (error) {
        document.getElementById("soilStatus").textContent =
            "Backend unavailable. Soil values were not saved.";
    }
});

// CROP IMAGE PREVIEW
document.getElementById("cropFile").addEventListener("change", event => {
    const file = event.target.files[0];
    const preview = document.getElementById("cropPreview");

    if (!file) {
        preview.hidden = true;
        return;
    }

    preview.src = URL.createObjectURL(file);
    preview.hidden = false;
});

// CROP IMAGE ANALYSIS
document.getElementById("cropBtn").addEventListener("click", async () => {
    const file = document.getElementById("cropFile").files[0];

    if (!file) {
        showToast("Please select a crop image first.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const result = await apiRequest("/api/crop/analyze", "POST", formData);

        const output = document.getElementById("cropResult");
        output.hidden = false;
        output.textContent = result.analysis || result.message ||
            JSON.stringify(result, null, 2);
    } catch (error) {
        showToast("Crop analysis backend is unavailable.");
    }
});

// WEATHER
const locations = {
    "Bengaluru Urban": [12.9716, 77.5946],
    "Belagavi": [15.8497, 74.4977],
    "Ballari": [15.1394, 76.9214],
    "Davanagere": [14.4644, 75.9218],
    "Hassan": [13.0033, 76.1004],
    "Haveri": [14.7951, 75.3991],
    "Kodagu": [12.3375, 75.8069],
    "Koppal": [15.3500, 76.1500],
    "Raichur": [16.2076, 77.3463],
    "Shivamogga": [13.9299, 75.5681],
    "Chikkamagaluru": [13.3161, 75.7720],
    "Mysuru": [12.2958, 76.6394]
};

const weatherDescriptions = {
    en: {
        0:"Clear sky", 1:"Mainly clear", 2:"Partly cloudy",
        3:"Overcast", 45:"Fog", 48:"Fog",
        51:"Light drizzle", 53:"Drizzle", 55:"Heavy drizzle",
        61:"Light rain", 63:"Moderate rain", 65:"Heavy rain",
        80:"Rain showers", 81:"Moderate showers", 82:"Heavy showers",
        95:"Thunderstorm"
    },
    kn: {
        0:"ಸ್ವಚ್ಛ ಆಕಾಶ", 1:"ಬಹುತೇಕ ಸ್ವಚ್ಛ", 2:"ಭಾಗಶಃ ಮೋಡ",
        3:"ಮೋಡ ಕವಿದ ವಾತಾವರಣ", 45:"ಮಂಜು", 48:"ಮಂಜು",
        51:"ತುಂತುರು ಮಳೆ", 53:"ಜಿನುಗು ಮಳೆ", 55:"ಹೆಚ್ಚಿನ ತುಂತುರು ಮಳೆ",
        61:"ಲಘು ಮಳೆ", 63:"ಮಧ್ಯಮ ಮಳೆ", 65:"ಭಾರಿ ಮಳೆ",
        80:"ಮಳೆಯ ತುಂತುರು", 81:"ಮಧ್ಯಮ ಮಳೆ", 82:"ಭಾರಿ ಮಳೆ",
        95:"ಗುಡುಗು ಸಹಿತ ಮಳೆ"
    },
    hi: {
        0:"साफ़ आसमान", 1:"अधिकतर साफ़", 2:"आंशिक बादल",
        3:"बादल छाए हुए", 45:"कोहरा", 48:"कोहरा",
        51:"हल्की बूंदाबांदी", 53:"बूंदाबांदी", 55:"तेज़ बूंदाबांदी",
        61:"हल्की बारिश", 63:"मध्यम बारिश", 65:"तेज़ बारिश",
        80:"बारिश की बौछारें", 81:"मध्यम बौछारें", 82:"तेज़ बौछारें",
        95:"गरज के साथ बारिश"
    }
};

function updateWeatherLabels() {
    const description = document.getElementById("weatherDescription");
    if (!description.dataset.code) return;

    const code = Number(description.dataset.code);
    description.textContent =
        weatherDescriptions[currentLanguage][code] || "Weather";
}

async function getWeather() {
    const district = document.getElementById("district").value;
    const coordinates = locations[district] || locations["Bengaluru Urban"];

    document.getElementById("weatherDistrict").textContent = district;

    try {
        const url =
            `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m`;

        const response = await fetch(url);

        if (!response.ok) throw new Error("Weather unavailable");

        const data = await response.json();
        const current = data.current;

        document.getElementById("temperature").textContent =
            current.temperature_2m + "°C";

        document.getElementById("humidity").textContent =
            current.relative_humidity_2m + "%";

        document.getElementById("rainfall").textContent =
            current.precipitation + " mm";

        document.getElementById("wind").textContent =
            current.wind_speed_10m + " km/h";

        const description = document.getElementById("weatherDescription");
        description.dataset.code = current.weather_code;

        updateWeatherLabels();

        document.getElementById("weatherIcon").textContent =
            current.weather_code === 0 ? "☀" :
            current.weather_code >= 61 ? "🌧" :
            current.weather_code >= 2 ? "☁" : "🌤";

    } catch (error) {
        document.getElementById("weatherDescription").textContent =
            "Weather information unavailable.";
    }
}

document.getElementById("district").addEventListener("change", getWeather);
document.getElementById("refreshWeather").addEventListener("click", getWeather);

// FERTILIZER ADVISORY
document.getElementById("fertilizerBtn").addEventListener("click", async () => {
    const data = {
        district: document.getElementById("district").value,
        crop: document.getElementById("cropSelect").value,
        stage: document.getElementById("stage").value,
        nitrogen: document.getElementById("nitrogen").value,
        phosphorus: document.getElementById("phosphorus").value,
        potassium: document.getElementById("potassium").value,
        ph: document.getElementById("ph").value,
        organic_carbon: document.getElementById("organicCarbon").value,
        language: currentLanguage
    };

    const output = document.getElementById("fertilizerResult");
    output.hidden = false;
    output.textContent = "Generating advisory...";

    try {
        const result = await apiRequest(
            "/api/fertilizer/recommend",
            "POST",
            data
        );

        output.textContent = result.recommendation ||
            result.message || JSON.stringify(result, null, 2);

    } catch (error) {
        output.textContent =
            "The fertilizer advisory backend is unavailable. Please connect the backend before using this feature. Do not apply fertilizer based on unverified estimates.";
    }
});

// INITIAL LOAD
getWeather();

