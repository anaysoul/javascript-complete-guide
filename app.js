const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection != SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      (cChoice === PAPER && pChoice === SCISSORS)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting on the fly...');
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  const winner = getWinner(computerSelection, playerSelection);
  console.log(winner);
  let message = `computer chose: ${computerSelection}, you chose: ${playerSelection} therefore ${winner}`;
  alert(message);
  gameIsRunning = false;
});

// not related to game
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'ADD' || operation === '+') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum, 'The result after adding all numbers is ');
};

const showResult = (result, messageText) => {
  alert(messageText + '' + result);
};

combine(
  showResult.bind(this, 'The result after ADDING all numbers is: '),
  '+',
  1,
  2,
  3,
  4,
  5,
  6
);
combine(showResult, '+', 4, 5, 'ad', 2, 3, 1);

// Assignment 1
// write an arrow function
const sayHello = (name) => {
  console.log(`Hi ${name}`);
};

sayHello('Soul');

// adjust arrow function 3 times
const sayHi = (greeting = 'hi', name = 'Max') => {
  console.log(`${greeting} ${name}`);
};

sayHi('salutations', 'soul');
sayHi();

const sayHola = () => {
  console.log("What's up soul?");
};

sayHola();

const saySelam = (name = 'Max') => {
  const checkInput = (...args) => {};
  return `Selam, ${name}`;
};

console.log(saySelam('Soulyana'));
console.log(saySelam());

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

// subtractUp(showResult, 1, 10, 15, 20);
