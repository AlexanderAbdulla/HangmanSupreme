//Handles all the information on settup of the game
// i.e. chosing the word
function hangmanGameModel(){
    var word;
    var definition;

    //All letters that have been guessed
    var guessedLetters = [];
    //The number of guesses / strikes
    var strikes = 5; 
    //All letters in the word
    var letters = [];
    //The score of the user 
    var score = 0;

    this.setWord = function(newWord, newDefinition) {
        word = newWord;
        definition = newDefinition;
    }
    
    //Add a word to the view
    this.addWordToView = function(){
        addWord(word);
    }

    //Add a definition to the view
    this.addDefinitionToView = function(){
        addDefinition(definition);
    }   
  
    //Rreturn the current game word
   this.getWord = function(){
       return word; 
   }

   //Returns an array of guessed letters
   this.getGuessedLetters = function(){
       return guessedLetters;
   }

   //Fails the guess of the word
   this.fail = function(){
        score--;
        setScore(score)
        losingView();
   }

   //Sets strikes based on the letter guessed
   this.setStrikes = function(letter){ 
        letter = letter.toLowerCase();
        if(word.includes(letter)){
         //do nothing
        } else {
            decrementStrikes(strikes);
            strikes--; 
        }
    }

    //Adds a letter that has been guessed 
    this.addLetterGuessed =  function(letter){
        letters.push(letter);
        addLetter(letter);
    }

    //Returns the amount of strikes
    this.getStrikes = function(){
        return strikes; 
    }

    //Returns the array of letters 
    this.getLetters = function(){
        return letters;
    }

    //Increment the score 
    this.increaseScore = function(){
        score++;
        setScore(score);
    }

    //Decrement the score
    this.decreaseScore = function(){
        score--;
        setScore(score);
    }

    //Check if the game guess is correct
   this.checkGameGuess = function(letter){
        letter = letter.toLowerCase();
        guessedLetters.push(letter);  
        var gameWord = "";
        var matches = 0;
        
    for(i = 0; i < word.length; i++)
    {
        if(guessedLetters.includes(word[i])){     
             gameWord = gameWord + " " + word[i];
             matches++;     
        }else if(word[i] == letter){
             gameWord = gameWord + " " + letter; 
             matches++;
        } else {
             gameWord = gameWord + " _";
        }
    }
     
          setGameWord(gameWord);
    
      if(word.length == matches) {
          $.getScript( "Views/hangmanView.js", function(){
               winningView();;
           });
           score++;
           setScore(score);
      }
    }


    //Reset the values of the game
    this.resetValues = function(){
        guessedLetters = []; 
        randomNum = (Math.random()* words.length) | 0;
        word = words[randomNum];
        definition = definitions[randomNum];
        strikes = 5; 
        letters = [];

        $.getScript( "Views/hangmanView.js", function(){
            resetViews();
        });
    }
    
    // Remove spinner and show hidden div
    this.endLoading = function() {
        document.getElementById('spinner').classList.add("invisible");
        document.getElementById('loadedInfo').classList.remove('hidden');
    }
}


