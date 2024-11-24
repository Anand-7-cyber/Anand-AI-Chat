// Button click event listener
document.getElementById('chat-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value; // Get the user input
    if (userInput.trim()) {
        sendMessage(userInput);
    }
    document.getElementById('user-input').value = '';  // Clear input field after sending
});

// Function to send user input to the server and display response
async function sendMessage(input) {
    try {
        const response = await fetch('/chat', {  // Server API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: input }),  // Send user input in JSON format
        });

        const data = await response.json();
        displayResponse(data.response);  // Displaying response from server
    } catch (error) {
        console.error('Error:', error);
        displayResponse('Sorry, something went wrong.');
    }
}

// Function to display the chat response in chatbox
function displayResponse(message) {
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML += `<div class="response">${message}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to bottom to see latest messages
}
