// let scores = JSON.parse(localStorage.getItem('scores')) || {
//     win: 0,
//     lose: 0,
//     Tie: 0
// };

let scores = {
    win: 0,
    lose: 0,
    Tie: 0
};

let autoplaying = false;
let Id;

function autoplay(){
    if(!autoplaying){
        Id = setInterval(function(){
            let playerMove = computerMove();
            playGame(playerMove);
        },1000);
        autoplaying = true;
    }else {
        clearInterval(Id);
        autoplaying = false;
    }
}

document.body.addEventListener('keydown', (event) =>{
    if(event.key === 'r'){
        playGame('rock');
    }else if(event.key === 'p'){
        playGame('paper');
    }else if(event.key === 's'){
        playGame('scissors');
    }
});

function toggle(name){
    let button = document.querySelector(name);

    if(!button.classList.contains('is-toggled')){
        removeprevious();
        button.classList.add('is-toggled');
    }else{
        button.classList.remove('is-toggled');
    }
}

let button = document.querySelector('.js-button-4');

button.addEventListener('click',()=>{
    toggle1()
});  

function toggle1() {
    
    let value = button.textContent.trim();

    if (!button.classList.contains('autoPlay')) {
        if (value === 'Auto Play is OFF') {
            button.textContent = 'Auto Play is ON';
            button.classList.add('autoPlay');
        } else {
            button.textContent = 'Auto Play is OFF';
            button.classList.remove('autoPlay');
        }
    } else {
        // If button already has 'autoPlay', toggle back
        button.textContent = 'Auto Play is OFF';
        button.classList.remove('autoPlay');
    }
}

function removeprevious(){
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
}

// showScore();

function showScore(){
    document.querySelector('.js-score').innerHTML = `Win : ${scores.win} | Loss : ${scores.lose} | Tie : ${scores.Tie}`;
}
 
// function Game(update){
//     document.querySelector('.js-result').innerHTML = update;
// }

function computerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playGame(playerMove) {
    const compMove = computerMove();
    let result = '';
    
    if (playerMove === compMove) {
        result = 'It\'s a tie!';
        scores.Tie += 1;
        // bothMoves();
        // Game(result);
        
    } else if (
        (playerMove === 'rock' && compMove === 'scissors') ||
        (playerMove === 'paper' && compMove === 'rock') ||
        (playerMove === 'scissors' && compMove === 'paper')
    ) {
        result = 'You win!';
        scores.win += 1;
        // bothMoves();
        // Game(result);
        
    } else {
        result = 'You lose!';
        scores.lose += 1;
        // bothMoves();
        // Game(result);
        
    }

    // function bothMoves(){
    //     document.querySelector('.js-bothMove').innerHTML = `Computer - ${compMove}, You - ${playerMove}`;
    // }

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-bothMove').innerHTML = `Computer - <img src="images/${compMove}-emoji.png" class="playerIcon">, You - <img src="images/${playerMove}-emoji.png" class="playerIcon">`;

    // localStorage.setItem('scores',JSON.stringify(scores));

    showScore();

//     alert(`Computer chose ${compMove}. ${result} 
// Win : ${scores.win} | Loss : ${scores.lose} | Tie : ${scores.Tie}`);

}

