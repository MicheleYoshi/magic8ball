var responses =[
    "Really?",
    "Does thou doubt me?",
    "Yes.",
    "Absolutely not.",
    "You can't be serious...",
    "NO",
    "In due time...",
    "I'm not God you know.",
    "Are you worthy though?",
    "Okay.",
    "You already know the answer.",
    "Skip.",
    "No thank you!",
    "That's rough, buddy.",
];

window.onload = function() {
    var result = document.getElementById("message");
    result.onclick = giveResponse;
}

function giveResponse() {
    var index = Math.floor(Math.random() * responses.length);
    alert(responses[index]);
}

function changeColor() {
    var colorChange = document.getElementById("eye");
    var colorNow = colorChange.style.backgroundColor;
    if(colorNow == 'darkviolet') {
        colorChange.style.backgroundColor = "darkblue";
    } else colorChange.style.backgroundColor = "darkviolet";
    }