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

function win() {

}

function lose() {

}

function draw() {

}

function game(userChoice) {

    const computerChoise = getComputerChoise();
    console.log(`user choise => ${userChoice} computer choise => ${computerChoise}`)

    switch (userChoice + computerChoise) {
        case 'rs':
        case 'pr':
        case 'sp':
            win()
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose()
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw()
            break;
    }

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