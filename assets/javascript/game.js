
        var userGuess= [], guessLeft, winScore=0, lossScore=0,  user_letter, comp_letter ;
          startgame();  
          document.addEventListener('keydown', function(event, ) {
          var key_code = event.keyCode;
          user_letter=String.fromCharCode(key_code);
          //letter1 =document.createTextNode(letter);
      if(guessLeft===1 && comp_letter !=user_letter )
    {
        lossScore=lossScore+1; 
        alert("Sorry, you missed it !");
        document.getElementById("lossScore").innerHTML = "Losses: "+ lossScore;  
         startgame()
    }

    else
    {
      if(guessLeft >0 && comp_letter===user_letter)
      {
    
    winScore= winScore+1;
    alert("you got it !");
    document.getElementById("winScore").innerHTML = "Wins: "+ winScore;
    startgame();
      }

    else if (guessLeft >0 && comp_letter !==user_letter)
    {

        if(!~userGuess.indexOf(user_letter)) {
            userGuess.push(user_letter);
            document.getElementById("userGuess").innerHTML ="Your Guesses so far: "+ userGuess;
            guessLeft=guessLeft-1;
            document.getElementById("guessLeft").innerHTML = "Guesses Left: "+ guessLeft;

        }
     }  
        
      



    
      }
   
        });

     function startgame(){
     guessLeft=9;
     comp_letter=null;
     userGuess= [];
     comp_letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
     document.getElementById("winScore").innerHTML = "Wins : "+ winScore;
    document.getElementById("lossScore").innerHTML = "Losses : "+ lossScore;
    document.getElementById("guessLeft").innerHTML = "Guesses Left: "+ guessLeft;
    document.getElementById("userGuess").innerHTML ="Your Guesses so far:"+ userGuess;
     }



