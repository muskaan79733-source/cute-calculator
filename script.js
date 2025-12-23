let display = document.getElementById("display");
let sound = document.getElementById("meowSound");

function playSound() {
    if (sound) {
        sound.currentTime = 0; // Rewinds to start so you can click fast
        sound.play().catch(err => {
            console.log("Waiting for user interaction to play sound");
        });
    }
}

function addValue(value) {
    playSound(); // The sound is handled here now!
    display.value += value;
}

function clearDisplay() {
    playSound();
    display.value = "";
}

function calculate() {
    playSound();
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error 😢";
    }
}