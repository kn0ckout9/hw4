let word = prompt("Input a word");
word = word.toLocaleLowerCase();
//console.log(word)
let vowelcount = 0;
j = word.length;

for (let i = 0; i < word.length; i++) {
    //console.log(`Character at index ${i} is ${word[i]}`);
    // count vowels (very inefficient)
    if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"|| word[i] == "y") {
        vowelcount++;

    }
}

console.log(`Your word has this many vowels: ${vowelcount}`)

// test for palindrome
const TestPalin = (inputword) => {
    // Function code using param1, param2, ...
    return inputword.split(``).reverse().join(``);
  };

if (word == TestPalin(word)) {
    console.log("Your word is a palindrome.")
}
else {
    console.log("Your word is NOT a palindrome.")
}
