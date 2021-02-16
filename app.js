const quote = document.getElementById("quote");
const generateBtn = document.getElementById("generateBtn");

const allQuotes = 
[
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    '"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt'
];


generateBtn.addEventListener("click", ()=>{

    let randomQuote = Math.floor(Math.random()*allQuotes.length);

    quote.innerHTML = allQuotes[randomQuote];
});