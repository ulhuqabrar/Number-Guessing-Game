const minum = 1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minum +1)) + minum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Enter the Number Between ${minum} - ${maxnum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter A Valid Number")
    }
    else if(guess < minum || guess > maxnum){
        window.alert("Enter Number Between 1 & 100");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Number is TOO LOW!!");
        }
        else if(guess > answer){
            window.alert("Number is TOO HIGH!!")
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. You got right answer in ${attempts} attempts`)
            running = false;
        }
    }
 }