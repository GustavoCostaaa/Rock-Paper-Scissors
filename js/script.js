const opponentOptions = document.querySelectorAll('.opponentOptions button');
const playerOptions = document.querySelectorAll('.playerOptions button');
const point = document.getElementById('point');

let opponentSelect;
let playerSelect;

function opponentSelected() {
  let randomNumber = Math.floor(Math.random() * 3);
  opponentSelect = opponentOptions[randomNumber].value;
}

function playerSelected() {
  for (i = 0; i < playerOptions.length; i++) {
    playerOptions[i].addEventListener('click', (e) => {
      playerSelect = e.target.value;
      opponentSelected();
      whoWon();
      point.innerHTML = whoWon();
    });
  }
}

function whoWon() {
  switch (playerSelect) {
    case 'rock':
      switch (opponentSelect) {
        case 'rock':
          return 'draw; opponent selected rock';
          break;

        case 'scissors':
          return 'you; opponent selected scissors';
          break;

        case 'paper':
          return 'opponent; opponent selected paper';
          break;

        default:
          return 'error';
          break;
      }
      break;

    case 'paper':
      switch (opponentSelect) {
        case 'paper':
          return 'draw; opponent selected paper';
          break;

        case 'rock':
          return 'you; opponent selected rock';
          break;

        case 'scissors':
          return 'opponent; opponent selected scissors';
          break;

        default:
          return 'error';
          break;
      }
      break;

    case 'scissors':
      switch (opponentSelect) {
        case 'scissors':
          return 'draw; opponent selected scissors';
          break;

        case 'paper':
          return 'you; opponent selected paper';
          break;

        case 'rock':
          return 'opponent; opponent selected rock';
          break;

        default:
          return 'error';
          break;
      }
      break;

    default:
      return 'error';
      break;
  }
}

playerSelected();
