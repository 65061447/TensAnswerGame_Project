
 let y = Math.floor(Math.random() * 100 + 1);
 

 let guess = 1;

 document.getElementById("submitguess").onclick = function () {

      
     let x = document.getElementById("guessField").value;

     if (x == y) {
         alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
             + guess + " GUESS ");
     }
     else if(guess > 10){
        guess++;
        alert("OOPS SORRY!! YOULOSE");
     }

    
     else if (x > y) {
         guess++;
         alert("!!<<WRONG>>!!");
     }
     else if (x < y){ 
         guess++;
         alert("!!<<WRONG>>!!");
        
     }
    

 }


 console.log (y);
