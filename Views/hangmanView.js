//update the strikes in the view
function decrementStrikes(previouStrikes){
    previouStrikes--;
    var newStrikes = previouStrikes;
    document.getElementById("strikes").innerHTML = "" + newStrikes + " lives left";
}

//add a letter in the view 
function addLetter(letter){
    var previousLetters = document.getElementById("playedLetters").innerHTML;
    document.getElementById("playedLetters").innerHTML = previousLetters + letter;
}

//add the word in the view (partially concealed)
function addWord(word){
    var spaces = word.length;
    var gameWord = "";
    for(i = 0; i < spaces; i++)
    {
        gameWord = "" + gameWord + " _";
    } 
    document.getElementById("gameWord").innerHTML = gameWord;
}

//add the word in the view (partially concealed)
function addDefinition(definition){
    
    document.getElementById("hint").innerHTML = "Hint / Definition: " + definition;
}

//update guesses
function updateSlots(letter, word, previousGuesses){

    var gameWord = "";
    var lettersGuessed = document.getElementById("playedLetters").innerHTML;
    var matches = 0;  
    console.log("letters guessed: " + lettersGuessed)
    
    

    for(i = 0; i < word.length; i++)
    {
        if(lettersGuessed.includes(word[i])){
            
            gameWord = gameWord + " " + word[i];
            matches++;     
        }else if(word[i] == letter){
            gameWord = gameWord + " " + letter; 
            matches++;
        } else {
            gameWord = gameWord + " _";
        }
    }

    if(word.length == matches) {
        winningView();

    }
}

//Display the losing view
function losingView(){
    document.getElementById("hiddenDiv").className = "bg-danger";
    document.getElementById("hiddenDiv").innerHTML = "You have failed, try again with a new word! The Answer was: " + word;    
    
    document.getElementById("buttonDiv").style.visibility = "hidden";
    document.getElementById("buttonDiv").style.display = "none";
    
    document.getElementById("nextWordBtn").disabled = false
    document.getElementById("nextWordBtn").style.opacity = "1"
}

//Display the winning view
function winningView(){
    document.getElementById("hiddenDiv").className = "bg-success";
    document.getElementById("hiddenDiv").innerHTML = "You have succeeded, try again with a new word!";
    
    document.getElementById("buttonDiv").style.visibility = "hidden";
    document.getElementById("buttonDiv").style.display = "none";

    document.getElementById("nextWordBtn").disabled = false
    document.getElementById("nextWordBtn").style.opacity = "1"
    
}

//Sets the scoreboard
function setScore(score){
    //document.getElementById("score").innerHTML = "Score: " + score;
}

//Sets the gameword
function setGameWord(gameWord){
    document.getElementById("gameWord").innerHTML = "" + gameWord;    
}

//Resets all the views
function resetViews(){
    document.getElementById("buttonDiv").style.visibility = "";
    document.getElementById("buttonDiv").style.display = ""; 
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        console.log(button.id);
        document.getElementById(button.id).disabled = false; 
        document.getElementById(button.id).style.opacity = "1";         
    }

    document.getElementById("nextWordBtn").disabled = true;
    document.getElementById("nextWordBtn").style.opacity = "0.3"; 
    document.getElementById("playedLetters").innerHTML = "";
}