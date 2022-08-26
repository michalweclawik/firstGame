const beginerLevel = document.querySelector(".welcome__level1");
const holes = document.querySelectorAll(".gameSection__playGroundSection")
const playWindow = document.querySelector(".gameSection__playGround")
const welcome = document.querySelector(".welcome");
const cursor = document.querySelector(".malet");
const scoreDisplay = document.querySelector('#gameSection__result')
const startButton = document.querySelector('#gameSection__startButton')
const resetButton = document.querySelector('#gameSection__resetButton')


let onOFF = true;
let score = 0;

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
        }, 1500)
    }
    return
}



const startGame = () => {
    if (onOFF) return
    onOFF = true;
    moleStart();

}


// beginerLevel.addEventListener("click", runGame)



const trackmallet = (event) => {

    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';

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