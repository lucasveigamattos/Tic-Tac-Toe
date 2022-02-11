const game = document.getElementById('game')
const winText = document.getElementById('win-text')

const square1 = document.getElementById('Square1')
const square2 = document.getElementById('Square2')
const square3 = document.getElementById('Square3')
const square4 = document.getElementById('Square4')
const square5 = document.getElementById('Square5')
const square6 = document.getElementById('Square6')
const square7 = document.getElementById('Square7')
const square8 = document.getElementById('Square8')
const square9 = document.getElementById('Square9')

square1.addEventListener('click', onClick)
square2.addEventListener('click', onClick)
square3.addEventListener('click', onClick)
square4.addEventListener('click', onClick)
square5.addEventListener('click', onClick)
square6.addEventListener('click', onClick)
square7.addEventListener('click', onClick)
square8.addEventListener('click', onClick)
square9.addEventListener('click', onClick)

var player = 'X'

function endGame() {
    game.remove()
    const msg = document.createElement('p')
    msg.innerText = `Game ended player ${player} won!`
    msg.style.fontSize = '20pt'
    msg.style.fontFamily = 'Arial'
    winText.appendChild(msg)
}

function checkGame() {
    if ((square1.innerText == square2.innerText && square2.innerText == square3.innerText) && square1.innerText != '' && square2.innerText != '' && square3.innerText != '') {
        endGame()
    }

    if ((square4.innerText == square5.innerText && square5.innerText == square6.innerText) && square4.innerText != '' && square5.innerText != '' && square6.innerText != '') {
        endGame()
    }

    if ((square7.innerText == square8.innerText && square8.innerText == square9.innerText) && square7.innerText != '' && square8.innerText != '' && square9.innerText != '') {
        endGame()
    }

    if ((square1.innerText == square4.innerText && square4.innerText == square7.innerText) && square1.innerText != '' && square4.innerText != '' && square7.innerText != '') {
        endGame()
    }

    if ((square2.innerText == square5.innerText && square5.innerText == square8.innerText) && square2.innerText != '' && square5.innerText != '' && square8.innerText != '') {
        endGame()
    }

    if ((square3.innerText == square6.innerText && square6.innerText == square9.innerText) && square3.innerText != '' && square6.innerText != '' && square9.innerText != '') {
        endGame()
    }

    if ((square1.innerText == square5.innerText && square5.innerText == square9.innerText) && square1.innerText != '' && square5.innerText != '' && square9.innerText != '') {
        endGame()
    }

    if ((square3.innerText == square5.innerText && square5.innerText == square7.innerText) && square3.innerText != '' && square5.innerText != '' && square7.innerText != '') {
        endGame()
    }
}

function onClick(information) {

    if (information.srcElement.innerText == '') {
        information.srcElement.innerText = player
    } else {
        return
    }

    checkGame()

    if (player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}