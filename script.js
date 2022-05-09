'use strict';

let number = Math.trunc(Math.random()* 20)  + 1;


let score = 20;
let highScore = 0;
const messageDisplay = function (message){
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click', function(){

    const guess = Number(document.querySelector(".guess").value);
    console.log(guess)
    if (!guess){
        messageDisplay("No number")
    } else if (guess === number) {
        messageDisplay("Correct number");
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = number;
        // To implement the highscore
        if (score > highScore){
            highScore = score
            document.querySelector(".highscore").textContent = score;
        }
    } else if (guess !== number){
        if (score > 1){
        messageDisplay(guess > number ? "Number too high" : "Number too low");
        score--;
        document.querySelector(".score").textContent = score;
        } else{
            document.querySelector(".message").textContent = "You lost the game!!!";
            document.querySelector(".score").textContent = 0;
    }
}
});
    

document.querySelector(".again").addEventListener("click", function (){
    score = 20;
    number = Math.trunc(Math.random()* 20)  + 1;
    messageDisplay("Start guessing");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?"
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = ""
});
