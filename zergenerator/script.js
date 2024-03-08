const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = getRandomQuote();
  }
  
  const newQuoteButton = document.getElementById("new-quote");
  newQuoteButton.addEventListener("click", displayQuote);
  
  // Display initial quote
  displayQuote();  