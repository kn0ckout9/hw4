const inputval = ["initialization"];
let i = 0;
let err = 0;

while (inputval[i].toLocaleLowerCase() != "stop") {
    inputval.push(prompt("Enter a word"));
    i++;
    if (inputval[1].toLocaleLowerCase() == "stop") {
        err = 1;
        console.log("No words to display, Stop was the first word entered.");
        break;
    }
  }

// exclude stop
inputval.pop();

// take out initialization
inputval.shift();

if (err != 1) {
    console.log(`Printing entered words:`);
}
for (const word of inputval) {
    console.log(word);
}