"use strict";

var beginerLevel = document.querySelector(".welcome__level1");
var holes = document.querySelectorAll(".gameSection__playGroundSection");
var playWindow = document.querySelector(".gameSection__playGround");
var welcome = document.querySelector(".welcome");
var cursor = document.querySelector(".malet");
var scoreDisplay = document.querySelector('#gameSection__result');
var startButton = document.querySelector('#gameSection__startButton');
var resetButton = document.querySelector('#gameSection__resetButton');
var onOFF = true;
var score = 0;

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
    }, 1500);
  }

  return;
};

var startGame = function startGame() {
  if (onOFF) return;
  onOFF = true;
  moleStart();
}; // beginerLevel.addEventListener("click", runGame)


var trackmallet = function trackmallet(event) {
  cursor.style.left = event.pageX + 'px';
  cursor.style.top = event.pageY + 'px';
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