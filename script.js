let spaces = [];
let gameOver = false;

let currentShape = 'cross'

function clickOnSpace(x) {
    if (!spaces[x] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player1').classList.add('playerInactive');
            document.getElementById('player2').classList.remove('playerInactive');

        } else {
            currentShape = 'cross';
            document.getElementById('player2').classList.add('playerInactive');
            document.getElementById('player1').classList.remove('playerInactive');
        }
        spaces[x] = currentShape;
        console.log(spaces);
        onClick()
        check()
    }
}

function onClick() {
    for (let i = 0; i < spaces.length; i++) {
        if (spaces[i] == 'circle') {
            document.getElementById('circle' + i).classList.remove('d-none');

        }
        if (spaces[i] == 'cross') {
            document.getElementById('cross' + i).classList.remove('d-none');
            document.getElementById('player1').classList.add('playerInaktive');
        }
    }
}

function check() {
    let winner;
    if (spaces[0] == spaces[1] && spaces[1] == spaces[2] && spaces[0]) {
        winner = spaces[0];
        document.getElementById('drawnLine1').style.transform = 'scaleX(1)';
    }

    if (spaces[3] == spaces[4] && spaces[4] == spaces[5] && spaces[3]) {
        winner = spaces[3];
        document.getElementById('drawnLine2').style.transform = 'scaleX(1)';
    }

    if (spaces[6] == spaces[7] && spaces[7] == spaces[8] && spaces[6]) {
        winner = spaces[6];
        document.getElementById('drawnLine3').style.transform = 'scaleX(1)';
    }

    if (spaces[0] == spaces[3] && spaces[3] == spaces[6] && spaces[0]) {
        winner = spaces[0];
        document.getElementById('drawnLine5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (spaces[1] == spaces[4] && spaces[4] == spaces[7] && spaces[1]) {
        winner = spaces[1];
        document.getElementById('drawnLine4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (spaces[2] == spaces[5] && spaces[5] == spaces[8] && spaces[2]) {
        winner = spaces[2];
        document.getElementById('drawnLine6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (spaces[0] == spaces[4] && spaces[4] == spaces[8] && spaces[0]) {
        winner = spaces[0];
        document.getElementById('drawnLine7').style.transform = 'rotate(45deg) scaleX(1.2)';
    }

    if (spaces[6] == spaces[4] && spaces[4] == spaces[2] && spaces[6]) {
        winner = spaces[6];
        document.getElementById('drawnLine8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }

    if (spaces[2] == spaces[4] && spaces[4] == spaces[6] && spaces[2]) {
        winner = spaces[2];

    }

    if (winner) {
        console.log('gewonnen', winner)
        gameOver = true;
        document.getElementById('gameOver').classList.remove('d-none')
        document.getElementById('restartButton').classList.remove('d-none')
    }

}

function restart() {
    location.reload();
}