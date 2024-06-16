const base = "http://localhost:3030/jsonstore/messenger";
const messages = document.querySelector('#messages');

function attachEvents() {
    let sendButton = document.querySelector('#submit');
    let refreshButton = document.querySelector('#refresh');

    sendButton.addEventListener('click', postMessage);
    refreshButton.addEventListener('click', loadAllMessages);

}

async function loadAllMessages() {
    const res = await fetch(base);
    const data = await res.json();
    let arrMessages = Array.from(Object.values(data));
    messages.textContent = ''; // Clear previous messages
    arrMessages.forEach((m) => {
        messages.textContent += `${m.author}: ${m.content}\n`; // Safer way to append text
    });
}

async function postMessage() {
    const author = document.getElementById('author');
    const content = document.getElementById('content'); // Corrected to get 'content' element
    if(author.value === '' || content.value === '') {
        alert('Fields are required');
        return; // Exit the function if fields are empty
    }

    let option = {
        method: "POST", // Standardized HTTP method to uppercase
        headers: {
            'Content-Type': 'application/json' // Corrected header
        },
        body: JSON.stringify({author: author.value, content: content.value})
    }

    let res = await fetch(base, option);

    if (res.ok) {
        console.log(await res.json()); // Ensure response is OK before parsing JSON
    } else {
        console.error('Failed to post message');
    }
}

attachEvents();