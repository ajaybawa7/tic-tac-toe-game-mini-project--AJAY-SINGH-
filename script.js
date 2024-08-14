let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O": "X"//if else ? matlab if or : matlab else
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&  
           (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
           (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            const winningImg = document.querySelector('.winninggif img');
            winningImg.style.width = "200px"; // Set the width to display the image
            winningImg.style.display = "block"; // Make the image visible
        }
    })

    // For Tie 
    if (!isgameover) {
        let isTie = true;
        Array.from(boxtext).forEach(element => {
            if (element.innerText === "") {
                isTie = false;
            }
        });
        if (isTie) {
            alert("Game tie");
            isgameover = true;
        }
    }
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && !isgameover){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    
    const winningImg = document.querySelector('.winninggif img');
    winningImg.style.width = "0px";     winningImg.style.display = "none";
})
