const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generateBtn = document.getElementById("generateBtn");

const allQuotes = 
[
    {
        quote :  `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        author : `-Nelson Mandela`
    },
    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        author: `-Walt Disney`
    },
    {
        quote: `"If life were predictable it would cease to be life, and be without flavor."`,
        author: `-Eleanor Roosevelt`
    }
];


generateBtn.addEventListener("click", ()=>{

    let randomQuote = Math.floor(Math.random()*allQuotes.length);

    quote.innerHTML = allQuotes[randomQuote].quote;
    author.innerHTML = allQuotes[randomQuote].author;
});