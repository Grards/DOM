const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
//   console.log(e.target.classList[1])
//   console.log(getElapsedTime())
    addSquare(e);
    logSquare(e);

    // Alert the colour of the targeted square
    const displayedsquares = document.querySelectorAll('.displayedsquare');
    displayedsquares.forEach((square) => {
        square.addEventListener('click', () => {
            alert(square.classList[1])
        });
    });
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare)
}

const actionSquare_wrapper = document.getElementsByClassName("actionsquare-wrapper")
const displayedsquare_wrapper = document.getElementsByClassName("displayedsquare-wrapper")
const logdisplay_wrapper = document.getElementsByTagName("ul")
const body = document.body

//Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
function addSquare(actionSquare){
    const newSquare = document.createElement("div")
    newSquare.classList.add("actionsquare", actionSquare.target.classList[1], "displayedsquare")
    displayedsquare_wrapper[0].appendChild(newSquare)
    const displayedsquare = document.querySelectorAll('.displayedsquare')
}

// Create a new <li> in the log below to state when the action was done 
function logSquare(actionSquare){
    let newLog = ("[" + getElapsedTime() + "] Created a new " + actionSquare.target.classList[1] + " square")
    let newLogLi = document.createElement("li")
    logdisplay_wrapper[0].append(newLogLi)
    newLogLi.append(newLog)
}



function randomColor(){
    let rgb = [
      parseInt((Math.random() * 255)),
      parseInt((Math.random() * 255)),
      parseInt((Math.random() * 255))
    ];
    let red = rgb[0].toString(16);
    let green = rgb[1].toString(16);
    let blue = rgb[2].toString(16);
    let randomColor = "#"+red+green+blue;
    return randomColor;
  }

body.addEventListener('keydown',(e)=>{
    if (e.code === "Space"){
        body.style.backgroundColor = randomColor()
        console.log(body.style.backgroundColor)
    }else if (e.code === "KeyL"){
        console.clear()
        logdisplay_wrapper[0].innerHTML = ""
    }else if (e.code === "KeyS"){
        displayedsquare_wrapper[0].innerHTML = ""
    }
})