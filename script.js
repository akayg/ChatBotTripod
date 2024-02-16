// Define necessary variables and functions
const chatInput = document.querySelector(".typing-textarea textarea");
const sendButton = document.querySelector(".typing-content span");
const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");

// Define loadDataFromLocalStorage function
const loadDataFromLocalStorage = () => {
    // Load saved chats and theme from local storage and apply/add on the page
    const themeColor = localStorage.getItem("themeColor");

    document.body.classList.toggle("light-mode", themeColor === "light_mode");
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";

    const defaultText = `<div class="default-text">
                            <h1> Tripod</h1>
                            <p>Start a conversation and explore the power of AI.<br> Your chat history will be displayed here.</p>
                        </div>`;

    chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
    chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to bottom of the chat container
};

// Add event listeners
sendButton.addEventListener("click", () => handleOutgoingChat());
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleOutgoingChat();
    }
});

// Add theme toggle functionality
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("themeColor", themeButton.innerText);
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});

// Add delete button functionality
deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all the chats?")) {
        localStorage.removeItem("all-chats");
        loadDataFromLocalStorage(); // Call loadDataFromLocalStorage function after deleting chats
    }
});

// Call the loadDataFromLocalStorage function when the page loads
window.onload = loadDataFromLocalStorage;

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
                            <img src="botimg.png" alt="chatbot-img">
                            <p>Choose one:</p>
                            <button class="chat-btn" data-response="abk">abk</button>
                            <button class="chat-btn" data-response="bcd">bcd</button>
                        </div>
                    </div>`;
    } else if (userText === "abk") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            <p>Thank you!</p>
                            <button class="chat-btn" data-response="pdf">pdf</button>
                        </div>
                    </div>`;
    } else if (userText === "bcd") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            <p>Thank</p>
                        </div>
                    </div>`;
    } 
    /*else if (userText === "pdf") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            <p>ok</p>
                            <button class="chat-btn" data-response="pdfm">pdfm</button>
                        </div>
                    </div>`;
    } */
   else     if (response === "pdf") {
    botResponse = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="botimg.png" alt="chatbot-img">
                        <p>Click the button to download the file.</p>
                        <button class="chat-btn" data-response="pdfm">Download File</button>
                    </div>
                </div>`;
}







    else if (response === "pdfm") {
        // Create an anchor element for initiating the download
        const downloadLink = document.createElement('a');
        downloadLink.href = 'sheetcheat.pdf'; // File path to the PDF file
        downloadLink.download = 'sheetcheat.pdf'; // Name of the file to be downloaded
        downloadLink.style.display = 'none'; // Hide the link

        // Append the anchor element to the document body and trigger the click event
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up: Remove the anchor element
        document.body.removeChild(downloadLink);
    }
    else {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            <p>I'm sorry, I didn't understand that.</p>
                        </div>
                    </div>`;
    }

    const userChatHtml = `<div class="chat-content">
                            <div class="chat-details">
                                <img src="userimg.png" alt="user-img">
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