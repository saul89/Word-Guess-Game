var words = ["restart","creativity","cute","epic","evolution"],
wins = 0,
gLeft = 12,
gMade = [],
user,
word = words[Math.floor(Math.random() * words.length)],
wordHidden = word;

/*Each iteration replace the letter at index i of word with _ storing the result in wordHidden.
eg. "string" 1st iteration _tring, 2nd iteration _ _ ring, ...... -> _ _ _ _ _ _ */
for( i=0 ; i < wordHidden.length; i++ ){
    wordHidden = wordHidden.replace(wordHidden[i],"_");
}

// Change the HTML content of id="currentWord" (initially empty) in wordHidden (e.g. _ _ _ _)
document.getElementById("currentWord").innerHTML = wordHidden;

// Listen Event of Key pressed
document.addEventListener('keypress', pressedKey, false);

// fuction to replace a character at a specific index
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function pressedKey(e){

    user = e.key.toLowerCase();
    
        if(gLeft > 1){

            // Check if the Key pressed is included in the word
            if(word.includes(user)){
                // Loop through every index (character) of word
                for(i = 0; i < word.length; i++){
                    /* Check if character at index i is equal to the key pressed by the user, if true calls the 
                    fuction replaceAt to replace _ with the key pressed */
                    if(word[i] === user){
                        wordHidden = wordHidden.replaceAt(i, user);
                        document.getElementById("currentWord").innerHTML = wordHidden;
                        if(wordHidden === word){
                            wins++;
                            document.getElementById("wins").innerHTML = wins;
                            gMade = [];
                            document.getElementById("guessesMade").innerHTML = gMade;
                            gLeft = 12;
                            document.getElementById("guessesLeft").innerHTML = gLeft;
                            word = words[Math.floor(Math.random() * words.length)];
                            wordHidden = word;
                            for( i=0 ; i < wordHidden.length; i++ ){
                                wordHidden = wordHidden.replace(wordHidden[i],"_");
                            }
                            document.getElementById("currentWord").innerHTML = wordHidden;
                        }
                    }
                }

            } else if(!gMade.includes(user)){
                gMade.push(user);
                document.getElementById("guessesMade").innerHTML = gMade;
                gLeft--;
                document.getElementById("guessesLeft").innerHTML = gLeft;
            }

        } else {
            gMade = [];
            document.getElementById("guessesMade").innerHTML = gMade;
            gLeft = 12;
            document.getElementById("guessesLeft").innerHTML = gLeft;
            word = words[Math.floor(Math.random() * words.length)];
            wordHidden = word;
            for( i=0 ; i < wordHidden.length; i++ ){
                wordHidden = wordHidden.replace(wordHidden[i],"_");
            }
            document.getElementById("currentWord").innerHTML = wordHidden;
        }
}