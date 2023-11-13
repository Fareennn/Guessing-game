const max = prompt ("Please enter a max number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if (guess == "quit"){
        console.log("you quit the game");
        break;
    }
    guess = parseInt(guess);
    if (guess == random){
        console.log("you guess the right number! random number was", random);
        break;
    }else if (guess < random){
            guess = prompt("Hint: your guess number was too small");
        } else{
            guess = prompt("Hint: your guess number was too large! Try again");}
}
