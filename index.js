// welcome section
const buttons = document.querySelectorAll('.welcome__level');
const welcome = document.querySelector(".welcome");
// game section
const holes = document.querySelectorAll(".gameSection__playGroundGrid")
const playWindow = document.querySelector(".gameSection__playGround")
const cursor = document.querySelector(".malet");
const gameTimer = document.querySelector("#timer");
const gameButtons = document.querySelectorAll('.buttons')
const scoreDisplay = document.querySelector('#gameSection__result')
const startButton = document.querySelector('#gameSection__startButton')
const resetButton = document.querySelector('#gameSection__resetButton')
const gameSection = document.querySelector('.gameSection')

// gameOverSection
const gameOver = document.querySelector(".gameoverSection")
const retryButton = document.querySelector('.gameoverSection__retry-button')
const gameoverScore = document.querySelector('.gameoverSection__yourScore')


let onOFF = false;
let score = 0;
let gameSpeed = 0;
let gameTime = null;
let interval
let currentgameTime = null;


// welcome page
const setLevel = (event) => {
    console.log(event.target.innerHTML)
    if (event.target.innerHTML === 'Beginner') {
        gameSpeed = 1500;
        gameTime = 60;
        gameTimer.textContent = gameTime
    } else if (event.target.innerHTML === 'Medium') {
        gameSpeed = 900;
        gameTime = 50;
        gameTimer.textContent = gameTime
    } else if (event.target.innerHTML === 'Expert') {
        gameSpeed = 600;
        gameTime = 40;
        gameTimer.textContent = gameTime
    }
    gameTimer.style.color = ("black");
    gameTimer.style.fontSize = ('20px');
    switchToSecondPage();
}


const switchToSecondPage = () => {
    welcome.style.display = 'none';
    gameSection.style.display = 'unset';
}

const cleanWindow = () => {
    scoreDisplay.innerHTML = '';
    score = 0;
    onOFF = null;
}
// mole  logic
const moleStart = () => {
    if (onOFF) {
        const randomNumber = Math.floor(Math.random() * holes.length);
        const hole = holes[randomNumber];

        let timer
        const moleImage = document.createElement("img");
        moleImage.classList.add("mole");
        moleImage.src = './pictures/molebody.png'

        moleImage.addEventListener('click', () => {
            score += 5;
            scoreDisplay.innerHTML = score
            moleImage.src = './pictures/molebodyAfter.png'
            clearTimeout(timer)
            setTimeout(() => {
                hole.removeChild(moleImage)
                moleStart();
            }, 400)
        })
        hole.appendChild(moleImage)
        timer = setTimeout(() => {
            hole.removeChild(moleImage)
            moleStart();
        }, gameSpeed)
    }
    return
}

const startGame = () => {
    if (onOFF) return
    onOFF = true;
    moleStart();
}

// game page logic button 
const gameButtonsAction = (event) => {

    if (event.target.innerHTML === 'START') {
        startGame()
        gameTimer.style.color = ("black")
        gameTimer.textContent = gameTime;
        interval = setInterval(countDownTimer, 1000)
        countDownTimer();

    }
    if (event.target.innerHTML === 'RESET') {
        cleanWindow()
        clearInterval(interval);
        interval = '';
        gameTimer.style.color = ("black")
        gameTimer.textContent = gameTime;
        currentgameTime = null


    }
    if (event.target.innerHTML === 'GO BACK') {
        welcome.style.display = '';
        gameSection.style.display = 'none';
        gameTimer.style.color = ("black")
        clearInterval(interval);
        cleanWindow()
        interval = '';
        gameTimer.textContent = gameTime;
        currentgameTime = null

    }
}


const countDownTimer = () => {
    currentgameTime = gameTimer.textContent
    currentgameTime--
    gameTimer.textContent = currentgameTime
    if (currentgameTime < 10) {
        gameTimer.style.color = ("red")
        gameTimer.style.fontSize = ('25px')
    }
    if (currentgameTime == 0) {
        clearInterval(interval)
        gameOver.style.visibility = 'visible';
        gameoverScore.innerHTML += score;

    }

}
resetGame = () => {
    cleanWindow()
    score = 0;
    welcome.style.display = '';
    gameSection.style.display = 'none';
    clearInterval(interval);
    gameOver.style.visibility = 'hidden';
}


buttons.forEach(button => button.addEventListener('click', setLevel));
retryButton.addEventListener('click', resetGame);
gameButtons.forEach(button => button.addEventListener('click', gameButtonsAction))