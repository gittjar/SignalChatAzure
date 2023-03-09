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


function isKeyPressed(event) {
    var x = document.getElementById("shiftkey");
    if (event.shiftKey) {
        x.innerHTML = "Shift näppäintä on painettu!";
    } else {
        x.innerHTML = "Shift näppäintä ei ole painettu!";
    }
}

var input = document.getElementById("messageInput");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("sendButton").click();
    }
});

