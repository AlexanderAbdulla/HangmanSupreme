// A randomized number
var word;
var definition;
//Make an empty hangmanmodel
var hangmanGameModel = new hangmanGameModel()

// Get our full list    
$.getJSON("dictionary.json", function(json) {
         var definitions = Object.values(json);
         var words = Object.keys(json);
         // Picking the random word and definition from the list
         var randomNum = (Math.random()* words.length) | 0;    
         word = words[randomNum];
         word = word.trim();
         definition = definitions[randomNum];
         if(definition.length > 10) {
             definition.slice(0, 10);
             definition = definition + "...";
    };
    console.log("Answer is: " + word);
      hangmanGameModel.setWord(word, definition);
      hangmanGameModel.addWordToView();
      hangmanGameModel.addDefinitionToView();
}
);

console.log('outside the fx');

//Define what happens when a letter is entered 
function letterEntered(val) {
        document.getElementById(val).disabled = true; 
        document.getElementById(val).style.opacity = "0.3";
    
        if(hangmanGameModel.getStrikes() ==0 ){
            hangmanGameModel.fail();
        } else {
            var letter = val; 
            letter = letter.toUpperCase();
            if(hangmanGameModel.getLetters().includes(letter)){
                // we have already guessed this
            } else {
                hangmanGameModel.setStrikes(letter);
                hangmanGameModel.addLetterGuessed(letter);
                hangmanGameModel.checkGameGuess(letter);
            }
        }
}


//Defines what happens when user clicks "play again"
function playAgain(){
    console.log("reseting game...");     
    window.location.reload();
    
}

//Defines what hapens when user clicks "new word"
function newWord(){
    hangmanGameModel.resetValues();
    hangmanGameModel.addDefinitionToView();
    hangmanGameModel.addWordToView();
}