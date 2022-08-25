const beginerLevel = document.querySelector(".welcome__level1");
const holes = document.querySelectorAll(".gameSection__playGroundSection")
const playWindow = document.querySelector(".gameSection__playGround")
const welcome = document.querySelector(".welcome");
const cursor = document.querySelector("#malet");
const scoreDisplay = document.querySelector('#gameSection__result')
const startButton = document.querySelector('#gameSection__startButton')
const resetButton = document.querySelector('#gameSection__resetButton')


let onOFF = true;
let score = 0;

const cleanWindow = () => {
    scoreDisplay.innerHTML = '';
    onOFF = false;

}



const moleStart = () => {
    if (onOFF) {
        const randomNumber = Math.floor(Math.random() * holes.length);
        const hole = holes[randomNumber]
        let timer
        const moleImage = document.createElement("img");
        moleImage.classList.add("mole");
        moleImage.src = './molebody.png'
        hole.appendChild(moleImage)

        moleImage.addEventListener('click', () => {
            console.log("pressed")
            score += 5;
            scoreDisplay.innerHTML = score
        })
        timer = setTimeout(() => {
            hole.removeChild(moleImage)
            moleStart(true);
        }, 1000)
    }
    return
}



const startGame = () => {
    onOFF = true;
    moleStart();

}


// beginerLevel.addEventListener("click", runGame)



const trackmallet = (event) => {

    malet.style.left = event.pageX + 'px';
    malet.style.top = event.pageY + 'px';

}

const rotateMalet = () => {

    cursor.classList.add("active")
}
const unRotateMalet = () => {
    cursor.classList.remove('active')
}



resetButton.addEventListener('click', cleanWindow)
startButton.addEventListener('click', startGame);
playWindow.addEventListener('mousemove', trackmallet);
playWindow.addEventListener('mousedown', rotateMalet);
playWindow.addEventListener('mouseup', unRotateMalet)