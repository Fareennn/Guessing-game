const max = prompt ("please enter a max number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");

while(true){
    if (guess == "quit"){
        console.log("you quit the game");
        break;
    }
    guess = parseInt(guess);
    if (guess == random){
        console.log("you guess the right number!", random);
        break;
    }else
    { guess = prompt ("This was a wrong guess, please try again!!");}
}