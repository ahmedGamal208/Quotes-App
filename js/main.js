var quotes = {
  quote: ["“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”",
    "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    "“The fool doth think he is wise, but the wise man knows himself to be a fool.”",
    "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”",
    "“I have not failed. I've just found 10,000 ways that won't work.”",
    "“The man who does not read has no advantage over the man who cannot read.”",
    "“That which does not kill us makes us stronger.”",
    "“It is never too late to be what you might have been.”",
    "“For every minute you are angry you lose sixty seconds of happiness.”",
    "“If you can't explain it to a six year old, you don't understand it yourself.”",
    "“Sometimes the questions are complicated and the answers are simple.”",],
  author: ["― Oscar Wilde",
    "― Frank Zappa",
    "― Mahatma Gandhi",
    "― Mark Twain",
    "― Oscar Wilde",
    "― William Shakespeare",
    "― Mark Twain",
    "― Thomas A. Edison",
    "― Mark Twain",
    "― Friedrich Nietzsche",
    "― George Eliot",
    "― Ralph Waldo Emerson",
    "― Albert Einstein",
    "― Dr. Seuss",]
}

document.getElementById("click").onclick = run;

var randomIndex;

function run() {
  randomize();
  displayItem();
  cut();
  check();
};

function randomize() {
  randomIndex = Math.floor(Math.random() * quotes.quote.length);
};

function displayItem() {
  document.getElementById("quote").innerHTML = quotes.quote[randomIndex];
  document.getElementById("author").innerHTML = quotes.author[randomIndex];
};

function cut() {
  quotes.quote.splice(randomIndex, 1);
  quotes.author.splice(randomIndex, 1);
};

function check() {
  if (quotes.quote.length == 0) {
    document.getElementById("quote").innerHTML = "All quotes have been displayed.";
    document.getElementById("author").innerHTML = "";
    return;
  }
};