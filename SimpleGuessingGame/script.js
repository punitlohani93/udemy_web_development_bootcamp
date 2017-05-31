var SECRET_NUMBER = 7;

var guess = prompt("Guess a number");
guess = Number(guess);
while(guess!==SECRET_NUMBER) {
	if(guess<SECRET_NUMBER) {
		guess = Number(prompt("Your guess is lower than the secret number! Try again"));
	} else {//if(Number(guess)>SECRET_NUMBER) {
		guess = Number(prompt("Your guess is greater than the secret number! Try again"));
	}
}
alert("Congrats! You guessed it correctly");