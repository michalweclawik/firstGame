"use strict";

// welcome section
var buttons = document.querySelectorAll('.welcome__level');
var welcome = document.querySelector(".welcome"); // game section

var holes = document.querySelectorAll(".gameSection__playGroundSection");
var playWindow = document.querySelector(".gameSection__playGround");
var cursor = document.querySelector(".malet");
var gameTimer = document.querySelector("#timer");
var gameButtons = document.querySelectorAll('.buttons');
var scoreDisplay = document.querySelector('#gameSection__result');
var startButton = document.querySelector('#gameSection__startButton');
var resetButton = document.querySelector('#gameSection__resetButton');
var gameSection = document.querySelector('.gameSection'); // gameOverSection

var gameOver = document.querySelector(".gameoverSection");
var retryButton = document.querySelector('.gameoverSection__retry-button');
var gameoverScore = document.querySelector('.gameoverSection__yourScore');
var onOFF = false;
var score = 0;
var gameSpeed = 0;
var gameTime = null;
var interval;
var currentgameTime = null;

resetGame = function resetGame() {
  cleanWindow();
  welcome.style.display = '';
  gameSection.style.display = 'none';
  clearInterval(interval);
  gameOver.style.visibility = 'hidden';
};

retryButton.addEventListener('click', resetGame);

var setLevel = function setLevel(event) {
  console.log(event.target.innerHTML);

  if (event.target.innerHTML === 'Beginer') {
    gameSpeed = 1300;
    gameTime = 60;
    gameTimer.textContent = gameTime;
  } else if (event.target.innerHTML === 'Medium') {
    gameSpeed = 900;
    gameTime = 50;
    gameTimer.textContent = gameTime;
  } else if (event.target.innerHTML === 'Expert') {
    gameSpeed = 600;
    gameTime = 40;
    gameTimer.textContent = gameTime;
  }

  gameTimer.style.color = "black";
  switchToSecondPage();
};

buttons.forEach(function (button) {
  return button.addEventListener('click', setLevel);
});

var switchToSecondPage = function switchToSecondPage() {
  welcome.style.display = 'none';
  gameSection.style.display = 'unset';
};

var cleanWindow = function cleanWindow() {
  scoreDisplay.innerHTML = '';
  score = 0;
  onOFF = null;
};

var moleStart = function moleStart() {
  if (onOFF) {
    var randomNumber = Math.floor(Math.random() * holes.length);
    var hole = holes[randomNumber];
    var timer;
    var moleImage = document.createElement("img");
    moleImage.classList.add("mole");
    moleImage.src = './pictures/molebody.png';
    moleImage.addEventListener('click', function () {
      score += 5;
      scoreDisplay.innerHTML = score;
      moleImage.src = './pictures/molebodyAfter.png';
      clearTimeout(timer);
      setTimeout(function () {
        hole.removeChild(moleImage);
        moleStart();
      }, 400);
    });
    hole.appendChild(moleImage);
    timer = setTimeout(function () {
      hole.removeChild(moleImage);
      moleStart();
    }, gameSpeed);
  }

  return;
};

var startGame = function startGame() {
  if (onOFF) return;
  onOFF = true;
  moleStart();
};

var gameButtonsAction = function gameButtonsAction(event) {
  if (event.target.innerHTML === 'START') {
    startGame();
    gameTimer.style.color = "black";
    gameTimer.textContent = gameTime;
    interval = setInterval(countDownTimer, 1000);
    countDownTimer();
  }

  if (event.target.innerHTML === 'RESET') {
    cleanWindow();
    clearInterval(interval);
    interval = '';
    gameTimer.style.color = "black";
    gameTimer.textContent = gameTime;
    currentgameTime = null;
  }

  if (event.target.innerHTML === 'GO BACK') {
    welcome.style.display = '';
    gameSection.style.display = 'none';
    gameTimer.style.color = "black";
    clearInterval(interval);
    cleanWindow();
    interval = '';
    gameTimer.textContent = gameTime;
    currentgameTime = null;
  }
};

var countDownTimer = function countDownTimer() {
  currentgameTime = gameTimer.textContent;
  currentgameTime--;
  gameTimer.textContent = currentgameTime;

  if (currentgameTime < 10) {
    gameTimer.style.color = "red";
    gameTimer.style.fontSize = '25px';
  }

  if (currentgameTime == 0) {
    clearInterval(interval); // cleanWindow()

    gameOver.style.visibility = 'visible';
    gameoverScore.innerHTML += score;
  }
};

gameButtons.forEach(function (button) {
  return button.addEventListener('click', gameButtonsAction);
});