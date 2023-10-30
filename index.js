let array = [[null,null,null] , [null,null,null] , [null,null,null]]


 function gameStatus () {
    let playerWon = ''
    let isGameWon = () =>{
        if (array[0][0]!=null && (array[0][0]==array[0][1] && array[0][1]==array[0][2])){
            playerWon=gameturn.getCurrentTurn()
        }
        else if (array[1][0]!=null && (array[1][0]===array[1][1] && array[1][1]==array[1][2])){
            playerWon=gameturn.getCurrentTurn()
        }
        else if (array[2][0]!=null  &&(array[2][0]===array[2][1] && array[2][1]==array[2][2])){
            playerWon=gameturn.getCurrentTurn()
        }
        else if (array[0][0]!=null &&(array[0][0]===array[1][0] && array[1][0]==array[2][0])){
            playerWon=gameturn.getCurrentTurn()
        }
        else if (array[0][1]!=null && (array[0][1]===array[1][1] && array[1][1]==array[2][1])){
            playerWon=gameturn.getCurrentTurn()
        }
        else if (array[0][2]!=null && (array[0][2]===array[1][2] && array[1][2]==array[2][2])){
            playerWon=gameturn.getCurrentTurn()
        }
        else if (array[0][0]!=null && (array[0][0]===array[1][1] && array[1][1]==array[2][2])){
            playerWon=gameturn.getCurrentTurn()
        }
        else if (array[2][0]!=null && (array[2][0]===array[1][1] && array[1][1]==array[0][2])){
            playerWon=gameturn.getCurrentTurn()
        }
    }
    const restartStatus = () => {playerWon=''}
    const getPlayerWon = () =>{
        return playerWon}
     return {isGameWon,getPlayerWon,restartStatus};
} 

console.log(gameStatus.getPlayerWon)

let btns = document.querySelectorAll('.box')


btns.forEach(button => {
    button.addEventListener('click',(btn)=>{
        if (btn.target.innerText=="" && gameStat.getPlayerWon()==''){
        array[btn.target.id[0]][btn.target.id[1]] = gameturn.getCurrentTurn()
        gameStat.isGameWon()
        btn.target.innerText=gameturn.getCurrentTurn()
        if (gameStat.getPlayerWon()!=''){
            let playerWon = playerWonModal(gameStat.getPlayerWon())
            playerWon.showWinner()
        } 
        gameturn.changeTurn()
        displayCurrentTurn(gameturn.getCurrentTurn())
        }
    })
});

function playerWonModal (winner){
    let showWinner =  () => {
        let  container = document.querySelector('.container')
        let dialog = document.createElement('dialog')
        let dialogContainer = document.createElement('div')
        let whoWonText = document.createElement('p')
        whoWonText.textContent=winner + " Won The game"
        let modalButton = document.createElement('button')
        modalButton.textContent="Play Again"
        modalButton.classList.add('modalButton')
        modalButton.addEventListener('click',playAgain)
        dialogContainer.appendChild(whoWonText)
        dialogContainer.appendChild(modalButton)
        dialogContainer.classList.add('modal')
        dialog.appendChild(dialogContainer)
        container.appendChild(dialog)
        dialog.showModal()
    }
    return {showWinner}
}

function displayCurrentTurn (currentTurn) {
    let currentTurnText = document.querySelector('.currentTurn')
    currentTurnText.textContent=currentTurn + " Player Turn"
}


function playAgain(){
    array= [[null,null,null] , [null,null,null] , [null,null,null]]
    gameStat.restartStatus()
    gameturn.restartTurn()
    displayCurrentTurn(gameturn.getCurrentTurn())
    console.log("playButton");
    let btns = document.querySelectorAll('.box')
    btns.forEach(button => {
        button.textContent=""
    })
    let winModal = document.querySelector('dialog')
    let  container = document.querySelector('.container')
    container.removeChild(winModal)
    winModal.close()
    
}

let Turn = function () {
    let currentTurn = "X"
    
    let changeTurn =  ()=>{
        if (currentTurn=="X"){
            currentTurn="O"
            console.log(currentTurn);
        }
        else{
            currentTurn="X"
        }
    }
    let getCurrentTurn = () => {
        return currentTurn
    }
    let restartTurn = () => {
        currentTurn="X"
    }
    return {changeTurn,getCurrentTurn,restartTurn}
}

let gameturn = Turn()
let gameStat = gameStatus()
displayCurrentTurn(gameturn.getCurrentTurn())
Turn().changeTurn()
console.log(gameturn.getCurrentTurn())