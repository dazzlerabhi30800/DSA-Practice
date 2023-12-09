
const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];


function getQuote() {
    $.getJSON(url, function (data) {
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    }).then((data) => getRandomQuote(data)).then(quote => generateText(quote));

}


function getRandomQuote(quoteArr) {
    let { quotes } = quoteArr;
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}


function generateText(randQuote) {
    $("#text h1").text(randQuote.quote);
    $("#author").text(`- ${randQuote.author}`);
    $("#tweet-quote").attr("href", `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randQuote.quote}`)
    let color = colors[Math.floor(Math.random() * colors.length)];
    $('html').css("--theme-color", color);

}

$('#new-quote').click(getQuote);


$('document').ready(getQuote);

// https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json


