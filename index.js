const beginerLevel = document.querySelector(".welcome__level1");
const holes = document.querySelectorAll(".gameSection__playGroundSection")
const playWindow = document.querySelector(".gameSection__playGround")
const welcome = document.querySelector(".welcome");
const cursor = document.querySelector("#malet");
const scoreDisplay = document.querySelector('#gameSection__result')
let score = 0;

const cleanWindow = () => {

    welcome.innerHTML = " ";

}


const moleStart = () => {

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
        moleStart();
    }, 1000)
}
moleStart()

const startGame = () => {
    moleStart()
    cleanWindow()
}


// beginerLevel.addEventListener("click", runGame)



const trackmallet = (event) => {

    malet.style.left = (event.pageX + 'px');
    malet.style.top = event.pageY + 'px';

}

const rotateMalet = () => {
    console.log("press")
    cursor.classList.add("active")
}
const unRotateMalet = () => {
    cursor.classList.remove('active')
}




playWindow.addEventListener('mousemove', trackmallet)
playWindow.addEventListener('mousedown', rotateMalet)
playWindow.addEventListener('mouseup', unRotateMalet)