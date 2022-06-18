const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Show = document.querySelector('#p1Show');
const p2Show = document.querySelector('#p2Show');
const playTo = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
      p1Score += 1;
      if (p1Score === winningScore) {
          isGameOver = true;
          p1Show.classList.add('winner')
          p2Show.classList.add('loser')
      }
      p1Show.textContent = p1Score;
      }  
})

p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score += 1;
  }
  if (p2Score == winningScore) {
      isGameOver = true; 
      p2Show.classList.add('loser')
      p1Show.classList.add('winner')
  } 
      p2Show.textContent = p2Score;
})

playTo.addEventListener('change', function () {
  winningScore.parseInt(this.value);
  reset();
})

resetButton.addEventListener('click', reset)

function reset () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Show.textContent = 0;
    p2Show.textContent = 0;
    p1Show.classList.remove('winner', 'loser');
    p2Show.classList.remove('winner', 'loser');
}

