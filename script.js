function generateRandomNumber() {
    return Math.floor(Math.random()*3);
}

let quote = ["You are average.", "Life is difficult.", "You cannot do it."];

console.log(quote[generateRandomNumber()]);