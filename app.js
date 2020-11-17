const userScore = 0;
const computerScore = 0;

//DOM variables
const userScore_Span = document.getElementById('userScore');
const computerScore_Span = document.getElementById('computerScore');
const scoreBoard_Div = document.querySelector('.score-board');
const result_Div = document.querySelector('.result');

const optionRockDiv = document.getElementById('rock');
const optionPaperDiv = document.getElementById('paper');
const optionScissorDiv = document.getElementById('scissor');


function getComputerChoise() {
    const choises = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choises.length);
    return choises[randomNumber];
}

function game(userChoice) {

    const computerChoise = getComputerChoise();

}

function main() {

    optionRockDiv.addEventListener('click', function() {
        game('r')
    })

    optionPaperDiv.addEventListener('click', function() {
        game('p')
    })

    optionScissorDiv.addEventListener('click', function() {
        game('s')
    })

}

main();