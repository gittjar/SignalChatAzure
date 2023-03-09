// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const btn = document.getElementById('sendButton');

btn.addEventListener('click', function handleClick(event) {
    // if you are submitting a form (prevents page reload)
    event.preventDefault();

    const msgInput = document.getElementById('messageInput');

    // Send value to server
    console.log(msgInput.value);

    // clear input field
    msgInput.value = '';
});