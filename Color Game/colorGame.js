var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var msgDisplay = document.querySelector('#msg');
var header = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}


// mode buttons event listeners
function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener('click', function() {
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');

		this.classList.add('selected');
		this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;

		reset();
		});
	}
}

// event listeners for squares
function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		// if selected color matches picked color...
		if (this.style.background === pickedColor) {
			msgDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again?';
			changeColors(pickedColor);
			header.style.background = pickedColor;
		} else {
			this.style.background = '#232323';
			msgDisplay.textContent = 'Try Again';
			}
		});
	}	
}



function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares); // how does browser know to display the right colors without "colors ="??
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked
	colorDisplay.textContent = pickedColor;
	msgDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
		// add initial colors to squares
		squares[i].style.background = colors[i];
		squares[i].style.display = 'block';

	} else {
		squares[i].style.display = 'none';
	}
	header.style.background = 'steelblue';
	}
}

resetButton.addEventListener("click", function() {
	reset();
});


// change colors of all squares to match given color
function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color; 
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor());

	}
	// return that array
	return arr;
}

function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}