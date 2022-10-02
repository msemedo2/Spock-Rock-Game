const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
const result = document.getElementById('resultText');
const reset = document.querySelector('.reset-icon');

const choices = {
	rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
	paper: { name: 'Paper', defeats: ['rock', 'spock'] },
	scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
	lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
	spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all 'selected icons'
function resetSelected() {
	allGameIcons.forEach((icon) => {
		icon.classList.remove('selected');
	});
}

// ResetScore and playerChoice / computerChoice
function resetAll() {
	resetSelected();
	playerScoreEl.textContent = '0';
	playerScoreNumber = 0;
	computerScoreEl.textContent = 0;
	computerScoreNumber = 0;
	result.textContent = 'Click the Icon to Start!';
}

// Random computer choice
function computerRandomChoice() {
	const computerChoiceNumber = Math.floor(Math.random() * 5 + 1);
	if (computerChoiceNumber <= 1) {
		computerChoice = 'rock';
		computerRock.classList.add('selected');
		computerChoiceEl.textContent = ' --- Rock';
	} else if (computerChoiceNumber <= 2 && computerChoiceNumber > 1) {
		computerChoice = 'paper';
		computerPaper.classList.add('selected');
		computerChoiceEl.textContent = ' --- Paper';
	} else if (computerChoiceNumber <= 3 && computerChoiceNumber > 2) {
		computerChoice = 'scissors';
		computerScissors.classList.add('selected');
		computerChoiceEl.textContent = ' --- Scissors';
	} else if (computerChoiceNumber <= 4 && computerChoiceNumber > 3) {
		computerChoice = 'lizard';
		computerLizard.classList.add('selected');
		computerChoiceEl.textContent = ' --- Lizard';
	} else {
		computerChoice = 'spock';
		computerSpock.classList.add('selected');
		computerChoiceEl.textContent = ' --- Spock';
	}
}

// Check result increase scores, update result text
function updateScore(playerChoice) {
	if (playerChoice === computerChoice) {
		result.textContent = "It's a Tie!";
	} else {
		const choice = choices[playerChoice].defeats;
		if (choice.indexOf(computerChoice) > -1) {
			result.textContent = 'You Won!';
			playerScoreNumber++;
			playerScoreEl.textContent = playerScoreNumber;
		} else {
			result.textContent = 'You Lost!';
			computerScoreNumber++;
			computerScoreEl.textContent = computerScoreNumber;
		}
	}
}

// Call functions to process turn
function checkResults(playerChoice) {
	resetSelected();
	computerRandomChoice();
	updateScore(playerChoice);
}

// Passing player selection value and styling icons
function select(playerChoice) {
	checkResults(playerChoice);
	// Add 'selected' styling & playerChoice
	switch (playerChoice) {
		case 'rock':
			playerRock.classList.add('selected');
			playerChoiceEl.textContent = ' --- Rock';
			break;
		case 'paper':
			playerPaper.classList.add('selected');
			playerChoiceEl.textContent = ' --- Paper';
			break;
		case 'scissors':
			playerScissors.classList.add('selected');
			playerChoiceEl.textContent = ' --- Scissors';
			break;
		case 'lizard':
			playerLizard.classList.add('selected');
			playerChoiceEl.textContent = ' --- Lizard';
			break;
		case 'spock':
			playerSpock.classList.add('selected');
			playerChoiceEl.textContent = ' --- Spock';
			break;
		default:
			break;
	}
}
