"use strict";

// welcome section
var buttons = document.querySelectorAll('.welcome__level'); // const beginerLevel = document.querySelector(".welcome__level1");
// const mediumLevel = document.querySelector(".welcome__level2");
// const expertLevel = document.querySelector(".welcome__level3");
// game section

var holes = document.querySelectorAll(".gameSection__playGroundSection");
var playWindow = document.querySelector(".gameSection__playGround");
var welcome = document.querySelector(".welcome");
var cursor = document.querySelector(".malet");
var gameButtons = document.querySelectorAll('.buttons');
var scoreDisplay = document.querySelector('#gameSection__result');
var startButton = document.querySelector('#gameSection__startButton');
var resetButton = document.querySelector('#gameSection__resetButton');
var gameSection = document.querySelector('.gameSection');
var onOFF = false;
var score = 0;
var gameSpeed = 0;

var setLevel = function setLevel(event) {
  console.log(event.target.innerHTML);

  if (event.target.innerHTML === 'Beginer') {
    gameSpeed = 1500;
  } else if (event.target.innerHTML === 'Medium') {
    gameSpeed = 100;
  } else if (event.target.innerHTML === 'Expert') {
    gameSpeed = 500;
  }

  switchToSecondPage();
};

buttons.forEach(function (button) {
  return button.addEventListener('click', setLevel);
});

var switchToSecondPage = function switchToSecondPage() {
  welcome.style.display = 'none';
  gameSection.style.display = 'unset'; // startButton.style.display = 'unset';
  // resetButton.style.display = 'unset';
  // gameButtons.style.display = 'unset';
}; // const beginerStart = () => {
//     gameSpeed = 500
//     switchToSecondPage()
// }
// beginerLevel.addEventListener('click', beginerStart)
// mediumLevel.addEventListener('click', () => gameSpeed = 1000)
// expertLevel.addEventListener('click', () => gameSpeed = 1500)


var cleanWindow = function cleanWindow() {
  scoreDisplay.innerHTML = '';
  onOFF = null;
};

var moleStart = function moleStart() {
  if (onOFF) {
    var randomNumber = Math.floor(Math.random() * holes.length);
    var hole = holes[randomNumber];
    var timer;
    var moleImage = document.createElement("img");
    moleImage.classList.add("mole");
    moleImage.src = './molebody.png';
    moleImage.addEventListener('click', function () {
      console.log("pressed");
      score += 5;
      scoreDisplay.innerHTML = score;
      moleImage.src = './molebodyAfter.png';
      clearTimeout(timer);
      setTimeout(function () {
        hole.removeChild(moleImage);
        moleStart();
      }, 500);
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
}; // beginerLevel.addEventListener("click", runGame)
// const trackmallet = (event) => {
//     cursor.style.left = event.pageX + 'px';
//     cursor.style.top = event.pageY + 'px';
// }
// const rotateMalet = () => {
//     cursor.classList.add("active")
// }
// const unRotateMalet = () => {
//     cursor.classList.remove('active')
// }


var gameButtonsAction = function gameButtonsAction(event) {
  if (event.target.innerHTML === 'START') {
    startGame();
  }

  if (event.target.innerHTML === 'RESET') {
    cleanWindow();
  }

  if (event.target.innerHTML === 'GO BACK') {
    welcome.style.display = '';
    gameSection.style.display = 'none'; // startButton.style.display = 'unset';
    // resetButton.style.display = 'unset';
    // gameButtons.style.display = 'none';
  }
};

gameButtons.forEach(function (button) {
  return button.addEventListener('click', gameButtonsAction);
}); // startButton.addEventListener('click', startGame);
// resetButton.addEventListener('click', cleanWindow)
// playWindow.addEventListener('mousemove', trackmallet);
// playWindow.addEventListener('mousedown', rotateMalet);
// playWindow.addEventListener('mouseup', unRotateMalet)