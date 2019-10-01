var words = ["restart","creativity","cute","epic","evolution"],
wins = 0,
gLeft = 12,
gMade = [],
user,
computer,
word = words[Math.floor(Math.random() * words.length)],
wordHidden = word;

// Replace letters of the word with _
for( i=0 ; i < wordHidden.length; i++ ){
    wordHidden = wordHidden.replace(wordHidden[i],"_");
}

// Insert space between _
wordHidden = wordHidden.split("").join(" ");

// Change the HTML content of a id="currentWord"
document.getElementById("currentWord").innerHTML = wordHidden;

// Listen Event of Key pressed
document.addEventListener('keypress', pressedKey, false);


function pressedKey(e){

    user = e.key.toLowerCase();
    
        if(gLeft > 1){

            // Check if the Key pressed is include in the word
            if(word.includes(user)){
                wordHidden = wordHidden.split(" ").join("");
                wordHidden = wordHidden.replace(wordHidden[word.indexOf(user)],user);
                wordHidden = wordHidden.split("").join(" ");
                document.getElementById("currentWord").innerHTML = wordHidden;

/*
                if(){
                    wins++;
                    document.getElementById("wins").innerHTML = wins;
                    gMade = [];
                    document.getElementById("guessesMade").innerHTML = gMade;
                    gLeft = 12;
                    document.getElementById("guessesLeft").innerHTML = gLeft;
                    word = words[Math.floor(Math.random() * words.length)];

                }
*/

                
            } else{
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
        }
}