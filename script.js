    //  const scope={
    //   wins: 0,
    //   losses: 0,
    //   ties: 0
    // };

let scope = JSON.parse(localStorage.getItem('scope'));

if(scope===null){
  scope ={
    wins: 0,
    losses: 0,
    ties: 0
  };
}

updateElementScore();

let isAutoPlay = false;
let intervalId;

    // const autoPlay = () =>{

    // };

document.querySelector('.js-rock-button').addEventListener('click', ()=>{
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', ()=>{
  playGame('paper');
});

document.querySelector('.js-scissor-button').addEventListener('click', ()=>{
  playGame('scissors');
});


document.querySelector('.js-autoplay-button').addEventListener('click', ()=>{
  if(!isAutoPlay){
    // intervalId = setInterval(function(){
    intervalId = setInterval(()=>{  
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isAutoPlay = true;
  }else{
    clearInterval(intervalId);
    isAutoPlay=false;
  }
});

// function autoPlay(){
//   if(!isAutoPlay){
//     // intervalId = setInterval(function(){
//     intervalId = setInterval(()=>{  
//       const playerMove = pickComputerMove();
//       playGame(playerMove);
//     }, 1000)
//     isAutoPlay = true;
//   }else{
//     clearInterval(intervalId);
//     isAutoPlay=false;
//   }
  
// }

document.body.addEventListener('keydown', (event)=>{
  //onsole.log('keydown');
  if(event.key === 'r'){
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissors');
  }
});
    

function playGame(playerMove){

const computerMove=pickComputerMove();

let result='';

if(playerMove==='scissors'){
  if(computerMove==='rock'){
    result='You lose.';
  }else if(computerMove==='paper'){
    result='You win.';
  }else if(computerMove==='scissors'){
    result='Tie.';
  }
}else if(playerMove==='paper'){
  if(computerMove==='rock'){
    result='You Win.';
  }else if(computerMove==='paper'){
    result='Tie.';
  }else if(computerMove==='scissors'){
    result='You lose.';
  }
}else if(playerMove==='rock'){
  if(computerMove==='rock'){
    result='Tie.';
  }else if(computerMove==='paper'){
    result='You lose.';
  }else if(computerMove==='scissors'){
    result='You win.';
  }
}

if(result==='You win.'){
  scope.wins+=1;
}else if(result==='You lose.'){
  scope.losses+=1;
}else if(result==='Tie.'){
  scope.ties+=1;
}

localStorage.setItem('scope', JSON.stringify(scope));

updateElementScore()

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You
<img src="image/${playerMove}-emoji.png" class="move-icon">
<img src="image/${computerMove}-emoji.png" class="move-icon">
computer`;

// alert(`You pick ${playerMove}. computer pick ${computerMove}. ${result}
//   Wins: ${scope.wins}, Losses: ${scope.losses}, Ties: ${scope.ties}`);


}

function updateElementScore(){
  document.querySelector('.js-scope').innerHTML = `Wins: ${scope.wins}, Losses: ${scope.losses}, Ties: ${scope.ties}`;
}

function pickComputerMove(){
  const randomNumber = Math.random();

  let computerMove='';

  if(randomNumber >=0 && randomNumber <1/3){
    computerMove='rock';
  }else if(randomNumber >=1/3 && randomNumber <2/3){
    computerMove='paper';
  }else if(randomNumber >=1/3 && randomNumber <1){
    computerMove='scissors';
  }

return computerMove;
}