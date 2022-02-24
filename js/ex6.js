let attempts = 0;
let zstatus = false;
console.log("Generating a number between 1 and 100...")

const MysteryNum = Math.floor(Math.random() * 100 + 1);

let guess = undefined;

while (zstatus == false) {
    guess = prompt("Guess a number");
    if (guess < MysteryNum) {
        alert("Too low, guess again");
        attempts++;
    }
    else if (guess > MysteryNum) {
        alert("Too high, guess again");
        attempts++;
    }
    else {
        zstatus = true;
    }
}

console.log(`Correct! Attemps: ${attempts}`);