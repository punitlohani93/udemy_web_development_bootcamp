var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1ScoreDisplay = document.getElementById("player1");
var p2ScoreDisplay = document.querySelector("#player2");
var reset = document.getElementsByTagName("button")[2];
var scoreLimitInputElement = document.getElementById("limit");
var scoreLimitElement = document.getElementById("scoreLimit");
var gameEnd = false
var scoreLimit = 5
scoreLimitElement.textContent = scoreLimit
var playingToScoreInput = document.querySelector("input");
var playingToScore = playingToScoreInput.value ? playingToScoreInput.value : 5;
var p1Score = 0;
var p2Score = 0
p1ScoreDisplay.textContent = p1Score
p2ScoreDisplay.textContent = p2Score
p1Button.addEventListener("click", function() {
	if (!gameEnd && p1Score !== scoreLimit) {
		p1Score++
		p1ScoreDisplay.textContent = p1Score
		if (p1Score === scoreLimit) {
			gameEnd = true
			p1ScoreDisplay.style.color = 'green'
		}
	}
});
p2Button.addEventListener("click", function() {
	if (!gameEnd && p2Score !== scoreLimit) {
		p2Score++
		p2ScoreDisplay.textContent = p2Score
		if (p2Score === scoreLimit) {
			gameEnd = true
			p2ScoreDisplay.style.color = 'green'
		}
	}
});
resetButton.addEventListener("click", function() {
	gameEnd = false
	p1ScoreDisplay.style.color = 'black'
	p2ScoreDisplay.style.color = 'black'
	scoreLimit = 5
	scoreLimitElement.textContent = scoreLimit
	p1Score = 0
	p1ScoreDisplay.textContent = p1Score
	p2Score = 0
	p2ScoreDisplay.textContent = p2Score
});
scoreLimitInputElement.addEventListener("change", function(event) {
	scoreLimit = event.target.value ? parseFloat(event.target.value) : 5
	scoreLimitElement.textContent = scoreLimit
})