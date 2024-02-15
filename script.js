const chatInput = document.querySelector(".typing-textarea textarea");
const sendButton = document.querySelector(".typing-content span");
const chatContainer = document.querySelector(".chat-container");

const createChatElement = (content, className) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = content;
    return chatDiv;
};

const handleOutgoingChat = (response) => {
    const userText = response ? response.trim().toLowerCase() : chatInput.value.trim().toLowerCase();
    if (!userText) return;

    chatInput.value = "";

    let botResponse;
    if (userText === "hello") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="images/chatbot.jpg" alt="chatbot-img">
                            <p>Choose one:</p>
                            <button class="chat-btn" data-response="abk">abk</button>
                            <button class="chat-btn" data-response="bcd">bcd</button>
                        </div>
                    </div>`;
    } else if (userText === "abk") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="images/chatbot.jpg" alt="chatbot-img">
                            <p>Thank you!</p>
                            <button class="chat-btn" data-response="pdf">pdf</button>
                        </div>
                    </div>`;
    } else if (userText === "bcd") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="images/chatbot.jpg" alt="chatbot-img">
                            <p>Thank</p>
                        </div>
                    </div>`;
    } else if (userText === "pdf") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="images/chatbot.jpg" alt="chatbot-img">
                            <button class="chat-btn" data-response="pdfm">pdfm</button>
                            <p>pdf</p>
                        </div>
                    </div>`;
    } 
    else if (userText === "pdfm") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="images/chatbot.jpg" alt="chatbot-img">
                            <p>pdfm</p>
                        </div>
                    </div>`;
    }else {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="images/chatbot.jpg" alt="chatbot-img">
                            <p>I'm sorry, I didn't understand that.</p>
                        </div>
                    </div>`;
    }

    const userChatHtml = `<div class="chat-content">
                            <div class="chat-details">
                                <img src="images/user.jpg" alt="user-img">
                                <p>${userText}</p>
                            </div>
                        </div>`;

    const botChatHtml = botResponse;

    const userChatDiv = createChatElement(userChatHtml, "outgoing");
    const botChatDiv = createChatElement(botChatHtml, "incoming");

    chatContainer.querySelector(".default-text")?.remove();
    chatContainer.appendChild(userChatDiv);
    chatContainer.appendChild(botChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    const buttons = botChatDiv.querySelectorAll('.chat-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.getAttribute('data-response');
            handleOutgoingChat(buttonText);
        });
    });
};

sendButton.addEventListener("click", () => handleOutgoingChat());
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleOutgoingChat();
    }
});

// Initial function call
handleOutgoingChat();
