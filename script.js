function generateRandomNumber(num) {
    return Math.floor(Math.random()*num);
};

const library = {
   subject: ["you","your life", "life"],
   verb: ["are", "is"],
   object: ["miserable", "average", "worthless", "painful"],
};

let quote = [];

quote.push(library["subject"][generateRandomNumber(3)]);

if(quote[0]=== "you"){
   quote.push(library["verb"][0]);
} else {
    quote.push(library["verb"][1]);
}
   quote.push(library["object"][generateRandomNumber(4)]); 

console.log(quote);