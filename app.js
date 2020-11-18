let userScore = 0;
let computerScore = 0;

//DOM variables
const userScore_Span = document.getElementById('userScore');
const computerScore_Span = document.getElementById('computerScore');
const scoreBoard_Div = document.querySelector('.score-board');
const result_Div = document.querySelector('.result p');


const optionRockDiv = document.getElementById('rock');
const optionPaperDiv = document.getElementById('paper');
const optionScissorDiv = document.getElementById('scissor');

const buttonReset = document.getElementById("btn-reset");

const userMove = document.getElementById("choise-user");
const computerMove = document.getElementById("choise-computer");


function getComputerChoise() {
    const choises = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choises.length);
    return choises[randomNumber];
}

function converterLetterToWords(letter) {
    let word = "";
    switch (letter) {
        case 'r':
            word = "Piedra";
            break;
        case 'p':
            word = "Papel";
            break;
        case 's':
            word = "Tijeras";
            break;
    }
    return word;
}

function printWin() {
    const result_span = document.querySelector('.result-span');
    result_span.classList.add("win");
}

function printLose() {

    const result_span = document.querySelector('.result-span');
    result_span.classList.add("lose");
}

function optionsSelected(userOption, computerOption) {
    userMove.innerHTML = converterLetterToWords(userOption);
    computerMove.innerHTML = converterLetterToWords(computerOption);
}

function win(userChoise, computerChoise) {

    userScore++;
    userScore_Span.innerHTML = userScore;
    result_Div.innerHTML = `${converterLetterToWords(userChoise)} vence a ${converterLetterToWords(computerChoise)} <span class="result-span">GANASTE 🔥</span>`;

    optionsSelected(userChoise, computerChoise);
    printWin();
}

function lose(userChoise, computerChoise) {

    computerScore++;
    computerScore_Span.innerHTML = computerScore;
    result_Div.innerHTML = `${converterLetterToWords(computerChoise)} vence a ${converterLetterToWords(userChoise)} <span class="result-span">PERDISTE 😥</span>`

    optionsSelected(userChoise, computerChoise);
    printLose();
}

function draw(userChoise, computerChoise) {
    optionsSelected(userChoise, computerChoise);
    result_Div.innerHTML = "EMPATE ⚔️";
}

function game(userChoice) {

    const computerChoise = getComputerChoise();


    switch (userChoice + computerChoise) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoise)
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(userChoice, computerChoise)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoise)
            break;
    }

}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScore_Span.innerHTML = userScore;
    computerScore_Span.innerHTML = computerScore;
    result_Div.innerHTML = `<p>Listo para jugar ? <span>DIVIERTETE</span></p>`;
    userMove.innerHTML = "Jugada";
    computerMove.innerHTML = "Jugada";
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

    buttonReset.addEventListener("click", resetGame);


}

main();