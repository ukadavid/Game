'use strict';

// document.querySelector(".again").addEventListener("click", function(){
//     document.querySelector(".message").textContent = "Start guessing...";
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
//     document.querySelector(".score").textContent = number;
// });

let score = 20;

document.querySelector(".check").addEventListener('click', function(){

    const guess = Number(document.querySelector(".guess").value);
    console.log(guess)

    // If no number was inputed, it would show "No number"
    if (!guess){
        document.querySelector(".message").textContent = "No number";

        // If the number is guessed right, this else if statement will run
        
    } else if (guess === number) {
        const number = Math.trunc(Math.random()* 20)  + 1;
        document.querySelector(".number").textContent = number;
        document.querySelector(".message").textContent = "Correct number";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";

        // If the number guessed is greater than the number
    } else if (guess > number){
        if (score > 1){
        document.querySelector(".message").textContent = "Number too high";
        score--;
        document.querySelector(".score").textContent = score;
        } else{
            document.querySelector(".message").textContent = "You lost the game!!!"
        }
    } else if (guess < number){
        if (score > 1){
            document.querySelector(".message").textContent = "Number too low";
            score--;
            document.querySelector(".score").textContent = score;
            } else{
                document.querySelector(".message").textContent = "You lost the game!!!"
            }
    }
})
