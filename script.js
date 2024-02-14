function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");

    // Display user message
    var userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.textContent = userInput;
    chatBox.appendChild(userMessageElement);

    // Get bot response
    var botResponse = getBotResponse(userInput);

    // Display bot message
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    botMessageElement.textContent = botResponse;
    chatBox.appendChild(botMessageElement);

    // Clear input
    document.getElementById("userInput").value = "";

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    var botResponse;
    userInput = userInput.toLowerCase();

    if (userInput.includes("hello")) {
        botResponse = "Bot: Hello there!";
    } else if (userInput.includes("bye")) {
        botResponse = "Bot: Goodbye!";
    } else {
        botResponse = "Bot: I received your message - '" + userInput + "'";
    }

    return botResponse;
}
