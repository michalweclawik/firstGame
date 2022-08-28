// welcome section
const buttons = document.querySelectorAll('.welcome__level');
// const beginerLevel = document.querySelector(".welcome__level1");
// const mediumLevel = document.querySelector(".welcome__level2");
// const expertLevel = document.querySelector(".welcome__level3");
// game section

const holes = document.querySelectorAll(".gameSection__playGroundSection")
const playWindow = document.querySelector(".gameSection__playGround")
const welcome = document.querySelector(".welcome");
const cursor = document.querySelector(".malet");



const gameButtons = document.querySelectorAll('.buttons')
const scoreDisplay = document.querySelector('#gameSection__result')
const startButton = document.querySelector('#gameSection__startButton')
const resetButton = document.querySelector('#gameSection__resetButton')
const gameSection = document.querySelector('.gameSection')


let onOFF = false;
let score = 0;
let gameSpeed = 0;

const setLevel = (event) => {
    console.log(event.target.innerHTML)
    if (event.target.innerHTML === 'Beginer') {
        gameSpeed = 1500;
    } else if (event.target.innerHTML === 'Medium') {
        gameSpeed = 100;
    } else if (event.target.innerHTML === 'Expert') {
        gameSpeed = 500;
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
            console.log("pressed")
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
    }
    if (event.target.innerHTML === 'RESET') {
        cleanWindow()
    }
    if (event.target.innerHTML === 'GO BACK') {
        welcome.style.display = '';
        gameSection.style.display = 'none';
        // startButton.style.display = 'unset';
        // resetButton.style.display = 'unset';
        // gameButtons.style.display = 'none';
    }
}


gameButtons.forEach(button => button.addEventListener('click', gameButtonsAction))
// startButton.addEventListener('click', startGame);
// resetButton.addEventListener('click', cleanWindow)

// playWindow.addEventListener('mousemove', trackmallet);
// playWindow.addEventListener('mousedown', rotateMalet);
// playWindow.addEventListener('mouseup', unRotateMalet)