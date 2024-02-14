function sendMessage(option) {
    var userInput = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");

    // Display user message
    var userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.textContent = userInput;
    chatBox.appendChild(userMessageElement);

    // Get bot response
    var botResponse;
    if (option === "Option One") {
        botResponse = { message: "hey you" };
    } else if (option === "Option Two") {
        botResponse = { message: "hey me" };
    } 
    else if (option === "Opt3"){
        botResponse={ message:"Seed"}
    }
    else  {
        botResponse = getBotResponse(userInput);
    }

    // Display bot message
    var botMessageElement = document.createElement("div");
    botMessageElement.classList.add("bot-message");
    botMessageElement.textContent = botResponse.message;
    chatBox.appendChild(botMessageElement);

    // If bot response has options, display buttons
    if (botResponse.options) {
        var optionsDiv = document.createElement("div");
        for (var i = 0; i < botResponse.options.length; i++) {
            var optionBtn = document.createElement("button");
            optionBtn.textContent = botResponse.options[i];
            optionBtn.classList.add("option-btn");
            optionBtn.setAttribute("onclick", "sendMessage('" + botResponse.options[i] + "')");
            optionsDiv.appendChild(optionBtn);
        }
        chatBox.appendChild(optionsDiv);
    }

    // Clear input
    document.getElementById("userInput").value = "";

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    var botResponse = {
        message: "",
        options: null
    };
    userInput = userInput.toLowerCase();

    if (userInput.includes("hello")) {
        botResponse.message = "Bot: Hello there!";
        botResponse.options = ["Option One", "Option Two","Opt3"];
    } else if (userInput.includes("bye")) {
        botResponse.message = "Bot: Goodbye!";
    } else {
        botResponse.message = "Bot: I received your message - '" + userInput + "'";
    }

    return botResponse;
}

// Optional: This part assumes you have HTML elements with IDs "userInput" and "chatBox"
// and attaches the function to a button click event.

document.getElementById("sendButton").addEventListener("click", function() {
    sendMessage();
});
