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
                        </div>`
                        chatInput.value = "Hello";
                            // Check if it's the first time the user is visiting the page
    
        
    

    // Store the first visit indicator in local storage
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

// Check if the user input matches any greeting
    const greetings = ["hello", "hey", "hi","hy","show menu"];

    
    if (greetings.includes(userText)) {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            <p>Choose option</p>
                            <button class="chat-btn" data-response="notes">Notes</button>
                            <button class="chat-btn" data-response="Question paper">Question Papers</button>
                        </div>
                    </div>`;
    } else if (userText === "notes") {
        botResponse = `<div class="chat-content">
        <div class="chat-details">
            <img src="botimg.png" alt="chatbot-img">
            <p>ADDING SOON</p></div>`;
    }
    else if (userText === "question paper") {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            <div>Select semester</div>
                            <div class="button-grid">
                                <button class="chat-btn" data-response="CSE1">CSE 1</button>
                                <button class="chat-btn" data-response="CSE2">CSE 2</button>
                                <button class="chat-btn" data-response="CSE3">CSE 3</button>
                                <button class="chat-btn" data-response="CSE4">CSE 4</button>
                                <button class="chat-btn" data-response="CSE5">CSE 5</button>
                                <button class="chat-btn" data-response="CSE6">CSE 6</button>
                            </div>
                            </div>
                           </div>
                    </div>`;
    } 

else if (response === "CSE1") {
    // Define the file options
    const fileOptions = [
        {  name: "MATH1", url: "https://example.com/page3"},
        { name: "S.PHY", url: "https://example.com/page1" },
        { name: "BEE", url: "https://example.com/page2" },
        {name : "E.d", url: "https:urlhere.com"}
        
    ];

    // Build the HTML for the file options
    let optionsHtml = "<p>Select a file to download:</p>";
    optionsHtml += '<select id="fileSelect">';
    fileOptions.forEach((file, index) => {
        optionsHtml += `<option value="${file.url}">${file.name}</option>`;
    });
    optionsHtml += '</select>';

    // Display the file options in the chat
    botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            ${optionsHtml}
                            <button id="downloadBtn">Download</button>
                        </div>
                    </div>`;

    // Update the chat container
    const botChatDiv = createChatElement(botResponse, "incoming");
    chatContainer.appendChild(botChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    // Add event listener to the download button
    const downloadBtn = botChatDiv.querySelector('#downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const select = botChatDiv.querySelector('#fileSelect');
        const fileUrl = select.options[select.selectedIndex].value;
        window.open(fileUrl, '_blank');  // Redirect user to the selected URL
    });

    // Prevent default behavior of the button click (e.g., form submission)
    return false;
}

else if (response === "CSE2") {
    // Define the file options
    const fileOptions = [
        {  name: "MATH2", url: "https://example.com/page3"},
        { name: "Chem.", url: "https://example.com/page1" },
        { name: "PPS", url: "https://example.com/page2" },
        {name : "Eng", url: "https:urlhere.com"}
        
    ];

    // Build the HTML for the file options
    let optionsHtml = "<p>Select a file to download:</p>";
    optionsHtml += '<select id="fileSelect">';
    fileOptions.forEach((file, index) => {
        optionsHtml += `<option value="${file.url}">${file.name}</option>`;
    });
    optionsHtml += '</select>';

    // Display the file options in the chat
    botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            ${optionsHtml}
                            <button id="downloadBtn">Download</button>
                        </div>
                    </div>`;

    // Update the chat container
    const botChatDiv = createChatElement(botResponse, "incoming");
    chatContainer.appendChild(botChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    // Add event listener to the download button
    const downloadBtn = botChatDiv.querySelector('#downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const select = botChatDiv.querySelector('#fileSelect');
        const fileUrl = select.options[select.selectedIndex].value;
        window.open(fileUrl, '_blank');  // Redirect user to the selected URL
    });

    // Prevent default behavior of the button click (e.g., form submission)
    return false;
}

else if (response === "CSE3") {
    // Define the file options
    const fileOptions = [
        {  name: "MATH3", url: "https://example.com/page3"},
        { name: "D.E", url: "https://example.com/page1" },
        { name: "O.O.P", url: "https://example.com/page2" },
        {name : "D.S.A", url: "https:urlhere.com"},
        {name : "D.o.s", url: "https:urlhere.com"}
        
    ];

    // Build the HTML for the file options
    let optionsHtml = "<p>Select a file to download:</p>";
    optionsHtml += '<select id="fileSelect">';
    fileOptions.forEach((file, index) => {
        optionsHtml += `<option value="${file.url}">${file.name}</option>`;
    });
    optionsHtml += '</select>';

    // Display the file options in the chat
    botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            ${optionsHtml}
                            <button id="downloadBtn">Download</button>
                        </div>
                    </div>`;

    // Update the chat container
    const botChatDiv = createChatElement(botResponse, "incoming");
    chatContainer.appendChild(botChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    // Add event listener to the download button
    const downloadBtn = botChatDiv.querySelector('#downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const select = botChatDiv.querySelector('#fileSelect');
        const fileUrl = select.options[select.selectedIndex].value;
        window.open(fileUrl, '_blank');  // Redirect user to the selected URL
    });

    // Prevent default behavior of the button click (e.g., form submission)
    return false;
}

else if (response === "CSE4") {
    // Define the file options
    const fileOptions = [
        {  name: "D.Maths", url: "https://example.com/page3"},
        {  name: "D.Maths", url: "https://example.com/page3"},
        { name: "C.O.A", url: "https://example.com/page1" },
        { name: "O.S", url: "https://example.com/page2" },
        {name : "U.H.V", url: "https:urlhere.com"}
        
    ];

    // Build the HTML for the file options
    let optionsHtml = "<p>Select a file to download:</p>";
    optionsHtml += '<select id="fileSelect">';
    fileOptions.forEach((file, index) => {
        optionsHtml += `<option value="${file.url}">${file.name}</option>`;
    });
    optionsHtml += '</select>';

    // Display the file options in the chat
    botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            ${optionsHtml}
                            <button id="downloadBtn">Download</button>
                        </div>
                    </div>`;

    // Update the chat container
    const botChatDiv = createChatElement(botResponse, "incoming");
    chatContainer.appendChild(botChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    // Add event listener to the download button
    const downloadBtn = botChatDiv.querySelector('#downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const select = botChatDiv.querySelector('#fileSelect');
        const fileUrl = select.options[select.selectedIndex].value;
        window.open(fileUrl, '_blank');  // Redirect user to the selected URL
    });

    // Prevent default behavior of the button click (e.g., form submission)
    return false;
}

else if (response === "CSE5") {
    // Define the file options
    const fileOptions = [
        {  name: "DBMS", url: "https://example.com/page3"},
        { name: "FLAT", url: "https://example.com/page1" },
        { name: "S.E", url: "https://example.com/page2" },
        {name : "C.N", url: "https:urlhere.com"}
        
    ];

    // Build the HTML for the file options
    let optionsHtml = "<p>Select a file to download:</p>";
    optionsHtml += '<select id="fileSelect">';
    fileOptions.forEach((file, index) => {
        optionsHtml += `<option value="${file.url}">${file.name}</option>`;
    });
    optionsHtml += '</select>';

    // Display the file options in the chat
    botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            ${optionsHtml}
                            <button id="downloadBtn">Download</button>
                        </div>
                    </div>`;

    // Update the chat container
    const botChatDiv = createChatElement(botResponse, "incoming");
    chatContainer.appendChild(botChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    // Add event listener to the download button
    const downloadBtn = botChatDiv.querySelector('#downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const select = botChatDiv.querySelector('#fileSelect');
        const fileUrl = select.options[select.selectedIndex].value;
        window.open(fileUrl, '_blank');  // Redirect user to the selected URL
    });

    // Prevent default behavior of the button click (e.g., form submission)
    return false;
}

else if (response === "CSE6") {
    // Define the file options
    const fileOptions = [
        {name: "A.I", url: "https://example.com/page3"},
        {name: "C.D", url: "https://example.com/page1" },
        {name: "Cloud", url: "https://example.com/page2" },
        {name : "SPM", url: "https:urlhere.com"}
        
    ];

    // Build the HTML for the file options
    let optionsHtml = "<p>Select a file to download:</p>";
    optionsHtml += '<select id="fileSelect">';
    fileOptions.forEach((file, index) => {
        optionsHtml += `<option value="${file.url}">${file.name}</option>`;
    });
    optionsHtml += '</select>';

    // Display the file options in the chat
    botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            ${optionsHtml}
                            <button id="downloadBtn">Download</button>
                        </div>
                    </div>`;

    // Update the chat container
    const botChatDiv = createChatElement(botResponse, "incoming");
    chatContainer.appendChild(botChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    // Add event listener to the download button
    const downloadBtn = botChatDiv.querySelector('#downloadBtn');
    downloadBtn.addEventListener('click', () => {
        const select = botChatDiv.querySelector('#fileSelect');
        const fileUrl = select.options[select.selectedIndex].value;
        window.open(fileUrl, '_blank');  // Redirect user to the selected URL
    });

    // Prevent default behavior of the button click (e.g., form submission)
    return false;
}






    else if (response === "pd") {
        // Create an anchor element for initiating the download
        const downloadLink = document.createElement('a');
        downloadLink.href = 'sheetcheat.pdf'; // File path to the PDF file
        downloadLink.download = 'sheetcheat.pdf'; // Name of the file to be downloaded
        downloadLink.target = '_blank'; // Open in a new page
        downloadLink.style.display = 'none'; // Hide the link
        // Append the anchor element to the document body and trigger the click event
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Prevent default behavior of the button click (e.g., form submission)
        return false;
    }
    else {
        botResponse = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="botimg.png" alt="chatbot-img">
                            <p>I'm sorry, I didn't understand that.</p>
                            <button class="chat-btn" data-response="show menu">SHOW MENU </button>
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