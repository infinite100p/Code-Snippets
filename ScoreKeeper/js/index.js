var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var h1 = document.querySelector('h1');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var p1Score = 0;
var p2Score = 0;
var numInput = document.getElementById('setGoal');
var gameOver = false;
var resetButton = document.querySelector('#reset');
var p = document.querySelector('p');
var winningScoreDisplay = document.querySelector('p span');
var goal = 5;

p1Button.addEventListener('click', function() {
 if (!gameOver) {
	p1Score++;
  if (p1Score === goal) {
     gameOver = true;
     p1Display.classList.add('winner');
  }
  p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function() {
 if (!gameOver) {
	p2Score++;
  if (p2Score === goal) {
     gameOver = true;
     p2Display.classList.add('winner');
  }
  p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener('click', reset);

function reset() {
	p1Score = 0;
 	p2Score = 0;
  p1Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Display.textContent = 0;
  p2Display.classList.remove('winner');
  gameOver = false;
}

numInput.addEventListener('change', function() {
	winningScoreDisplay.textContent = this.value;
  goal = Number(this.value);
  reset();
});