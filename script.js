document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded - Debugging Start");

    // Select chatbot elements
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotMessages = document.getElementById("chatbot-messages");

    // ✅ Open/Close Chatbot (Ensure it works)
    chatbotToggle.addEventListener("click", () => {
        if (chatbotWindow.style.display === "none" || chatbotWindow.style.display === "") {
            chatbotWindow.style.display = "block"; 
        } else {
            chatbotWindow.style.display = "none"; 
        }
    });
    
    // ✅ Predefined chatbot responses (Fixed matching issues)
    const chatbotResponses = {
        "hi": "Hello how can i assist you.",
        "hello": "Hi how can i help u.",
        "any opeanings for freshers": "Yes there are opeanings for several roles.",
        "can i know the working hours": "Our working hours are Monday to Friday, 9:00 AM to 5:00 PM (local time).",
        "how do i contact dxc customer support team": "You can reach our customer support team by phone at 08021314, email at support@dxc.com, or through this chat.",
        "what is dxc mission statement": "Our mission is to deliver exceptional IT services and solutions that meet the evolving needs of our clients.",
        "how do i request time off": "You can request time off through our HR portal or by contacting your manager.",
        "how many employees work in dxc": "7 lakh employees.",
        "what are dxc employee benefits": "Our employee benefits include health insurance, retirement plans, and more. Please refer to our HR portal for full details.",
        "bye": "Thank you have a great Day."
    };

    // ✅ Function to handle chatbot messages
    function sendMessage() {
        const userMessage = chatbotInput.value.trim();
        console.log("User Message Received:", userMessage); // Debugging log

        if (userMessage) {
            chatbotMessages.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
            chatbotInput.value = ""; // Clear input field

            setTimeout(() => {
                let response = "I'm sorry, I don't have that information.";

                // 🔥 Normalize user input: Remove punctuation, extra spaces & lowercase it
                const cleanedMessage = userMessage.toLowerCase().replace(/[^a-z0-9\s]/gi, "").trim();
                console.log("Processed User Message:", cleanedMessage); // Debugging log

                // 🔍 Check if we have a predefined response
                if (chatbotResponses.hasOwnProperty(cleanedMessage)) {
                    response = chatbotResponses[cleanedMessage];
                }

                chatbotMessages.innerHTML += `<div><strong>DXC Bot:</strong> ${response}</div>`;
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to latest message
            }, 500);
        }
    }

    // ✅ Send message on button click
    chatbotSend.addEventListener("click", sendMessage);

    // ✅ Send message on "Enter" key
    chatbotInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
