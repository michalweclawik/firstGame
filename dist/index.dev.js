"use strict";

var beginerLevel = document.querySelector(".welcome__level1");
var holes = document.querySelectorAll(".gameSection__playGroundSection");
var playWindow = document.querySelector(".gameSection__playGround");
var welcome = document.querySelector(".welcome");
var cursor = document.querySelector("#malet");
var scoreDisplay = document.querySelector('#gameSection__result');
var startButton = document.querySelector('#gameSection__startButton');
var resetButton = document.querySelector('#gameSection__resetButton');
var onOFF = true;
var score = 0;

var cleanWindow = function cleanWindow() {
  scoreDisplay.innerHTML = '';
  onOFF = false;
};

var moleStart = function moleStart() {
  if (onOFF) {
    var randomNumber = Math.floor(Math.random() * holes.length);
    var hole = holes[randomNumber];
    var timer;
    var moleImage = document.createElement("img");
    moleImage.classList.add("mole");
    moleImage.src = './molebody.png';
    hole.appendChild(moleImage);
    moleImage.addEventListener('click', function () {
      console.log("pressed");
      score += 5;
      scoreDisplay.innerHTML = score;
    });
    timer = setTimeout(function () {
      hole.removeChild(moleImage);
      moleStart(true);
    }, 1000);
  }

  return;
};

var startGame = function startGame() {
  onOFF = true;
  moleStart();
}; // beginerLevel.addEventListener("click", runGame)


var trackmallet = function trackmallet(event) {
  malet.style.left = event.pageX + 'px';
  malet.style.top = event.pageY + 'px';
};

var rotateMalet = function rotateMalet() {
  cursor.classList.add("active");
};

var unRotateMalet = function unRotateMalet() {
  cursor.classList.remove('active');
};

resetButton.addEventListener('click', cleanWindow);
startButton.addEventListener('click', startGame);
playWindow.addEventListener('mousemove', trackmallet);
playWindow.addEventListener('mousedown', rotateMalet);
playWindow.addEventListener('mouseup', unRotateMalet);