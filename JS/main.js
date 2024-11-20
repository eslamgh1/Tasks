
var listQuotes = ["Be yourself; everyone else is already taken.", "So many books, so little time", "A room without books is like a body without a soul.", "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "You only live once, but if you do it right, once is enough.", "In three words I can sum up everything I've learned about life: it goes on.", "If you tell the truth, you don't have to remember anything", "A friend is someone who knows all about you and still loves you."]
var lastQuote;  //for comparison in the next loop


function generatorQuotes() {

  for (var i = 0; i < listQuotes.length; i++) {
    var numSelected = Math.floor(Math.random() * listQuotes.length); // In the loop to inusre iteration 
    var newQuote = listQuotes[numSelected]; // selection from list Array
    
    if (newQuote !== lastQuote) 
    { 
    lastQuote = newQuote; 
    document.getElementById('demo').innerHTML = newQuote; console.log(newQuote); 
    break; // becasue of the loop function
    }

  }

}


