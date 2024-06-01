function encodeAndDecodeMessages() {
    let messageTextarea = document.querySelector('textarea[placeholder="Write your message here..."]');
    let encodedTextarea = document.querySelector('textarea[placeholder="No messages..."]');
    let buttons = Array.from(document.querySelectorAll('button'));
    let encodeButton = buttons.find(button => button.textContent === 'Encode and send it');
    let decodeButton = buttons.find(button => button.textContent === 'Decode and read it');

    encodeButton.addEventListener('click', (e) => {
        encodedTextarea.value  = messageTextarea.value.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) + 1)).join('');
        messageTextarea.value = '';
    });
    decodeButton.addEventListener('click', (e) => {
        messageTextarea.value = encodedTextarea.value.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) - 1)).join('');
        encodedTextarea.value = '';
    });
}