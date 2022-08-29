// welcome section
const buttons = document.querySelectorAll('.welcome__level');


const holes = document.querySelectorAll(".gameSection__playGroundSection")
const playWindow = document.querySelector(".gameSection__playGround")
const welcome = document.querySelector(".welcome");
const cursor = document.querySelector(".malet");
const gameTimer = document.querySelector("#timer");


const gameButtons = document.querySelectorAll('.buttons')
const scoreDisplay = document.querySelector('#gameSection__result')
const startButton = document.querySelector('#gameSection__startButton')
const resetButton = document.querySelector('#gameSection__resetButton')
const gameSection = document.querySelector('.gameSection')


const gameOver = document.querySelector(".gameoverSection")
const retryButton = document.querySelector('.gameoverSection__retry-button')
const gameoverScore = document.querySelector('.gameoverSection__yourScore')

let onOFF = false;
let score = 0;
let gameSpeed = 0;
let gameTime = null;
let interval
let currentgameTime = null;


resetGame = () => {
    cleanWindow()
    welcome.style.display = '';
    gameSection.style.display = 'none';
    clearInterval(interval);
    gameOver.style.visibility = 'hidden';
}


retryButton.addEventListener('click', resetGame);


const setLevel = (event) => {
    console.log(event.target.innerHTML)
    if (event.target.innerHTML === 'Beginer') {
        gameSpeed = 1500;
        gameTime = 60;
        gameTimer.textContent = gameTime
    } else if (event.target.innerHTML === 'Medium') {
        gameSpeed = 1000;
        gameTime = 50;
        gameTimer.textContent = gameTime
    } else if (event.target.innerHTML === 'Expert') {
        gameSpeed = 500;
        gameTime = 40;
        gameTimer.textContent = gameTime
    }
    switchToSecondPage()

}

buttons.forEach(button => button.addEventListener('click', setLevel));


const switchToSecondPage = () => {
    welcome.style.display = 'none';
    gameSection.style.display = 'unset';
    // startButton.style.display = 'unset';
    // resetButton.style.display = 'unset';
    // gameButtons.style.display = 'unset';

}

// const beginerStart = () => {
//     gameSpeed = 500
//     switchToSecondPage()
// }


// beginerLevel.addEventListener('click', beginerStart)
// mediumLevel.addEventListener('click', () => gameSpeed = 1000)
// expertLevel.addEventListener('click', () => gameSpeed = 1500)

const cleanWindow = () => {
    scoreDisplay.innerHTML = '';
    score = 0
    onOFF = null;
}



const moleStart = () => {
    if (onOFF) {
        const randomNumber = Math.floor(Math.random() * holes.length);
        const hole = holes[randomNumber]
        let timer

        const moleImage = document.createElement("img");
        moleImage.classList.add("mole");
        moleImage.src = './molebody.png'
        moleImage.addEventListener('click', () => {

            score += 5;
            scoreDisplay.innerHTML = score
            moleImage.src = './molebodyAfter.png'
            clearTimeout(timer)
            setTimeout(() => {
                hole.removeChild(moleImage)
                moleStart();
            }, 500)

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


// beginerLevel.addEventListener("click", runGame)



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

const gameButtonsAction = (event) => {

    if (event.target.innerHTML === 'START') {
        startGame()
        gameTimer.textContent = gameTime;
        interval = setInterval(countDownTimer, 1000)
        countDownTimer();

    }
    if (event.target.innerHTML === 'RESET') {
        cleanWindow()
        clearInterval(interval);
        interval = '';
        gameTimer.textContent = gameTime;
        currentgameTime = null


    }
    if (event.target.innerHTML === 'GO BACK') {
        welcome.style.display = '';
        gameSection.style.display = 'none';
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
        gameTimer.style.fontSize = ("20px")
    }
    if (currentgameTime == 0) {
        clearInterval(interval)
        // cleanWindow()
        gameOver.style.visibility = 'visible';
        gameoverScore.innerHTML += score;

    }

}





gameButtons.forEach(button => button.addEventListener('click', gameButtonsAction))
// startButton.addEventListener('click', startGame);
// resetButton.addEventListener('click', cleanWindow)

// playWindow.addEventListener('mousemove', trackmallet);
// playWindow.addEventListener('mousedown', rotateMalet);
// playWindow.addEventListener('mouseup', unRotateMalet)