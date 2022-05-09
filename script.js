'use strict';

const number = Math.trunc(Math.random()* 20)  + 1;
document.querySelector(".number").textContent = number;

let score = 20;

document.querySelector(".check").addEventListener('click', function(){

    const guess = Number(document.querySelector(".guess").value);
    console.log(guess)
    if (!guess){
        document.querySelector(".message").textContent = "No number";
    } else if (guess === number) {
        document.querySelector(".message").textContent = "Correct number";
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
