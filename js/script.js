console.log('JS ok')

/******* | DOM'S ELEMENT | *******/

const startSection = document.getElementById('start');
const btnStart = document.getElementById('start-game');
const logicGame = document.getElementById('wrapper');
const counter = document.getElementById('counter');
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');
const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const thirthInput = document.getElementById('third-input');
const fourthInput = document.getElementById('fourth-input');
const fifthInput = document.getElementById('fifth-input') 
const buttonInput = document.getElementById('btn-send');
const inputSection = document.getElementById('input-section');
const scoreSection = document.getElementById('score-section');
const score = document.getElementById('score');
const numbersFoundbyUser = document.getElementById('found-numbers');




/******* | FUNCTIONS | *******/

function getRandomNumbers (maxNumber){

    let randomNumbers = [];

    while (randomNumbers.length < maxNumber) {
        let number;
        do {
            //genero il numero random
            number = Math.floor(Math.random() * 100) + 1;
            //fin quando il numero nel è presente nel array continuo ad estrarre
        } while (randomNumbers.includes(number));
        // pusho nel array
        randomNumbers.push(number);
    }

    return randomNumbers;
}

function getInputUserNumbers (){

    const userNumbers = [];

    userNumbers.push(parseInt(firstInput.value));
    userNumbers.push(parseInt(secondInput.value));
    userNumbers.push(parseInt(thirthInput.value));
    userNumbers.push(parseInt(fourthInput.value));
    userNumbers.push(parseInt(fifthInput.value));
    return userNumbers;
}

btnStart.addEventListener('click', function (){

    startSection.classList.add('d-none');
    logicGame.classList.remove('d-none');

    /******* | COUNTDOWN | *******/
    
    let timer = 30;
    randomNumbers = getRandomNumbers(5);
    numbers.innerHTML = randomNumbers.join(" ");
    
    console.log(randomNumbers)
    
    const reverse = setInterval(function(){
        const countDown = --timer
        counter.innerHTML = countDown
    
        if (countDown === 0){
            clearInterval(reverse);
            numbers.classList.add('d-none');
            inputSection.classList.remove('d-none');
            counter.classList.add('d-none')
        }
    }, 1000)
    
    
    /******* | BUTTON INPUT USER NUMBERS | *******/
    
    buttonInput.addEventListener('click', function (){
    
        const userNumbers = getInputUserNumbers();
        
        let foundNumbers = [];
        
        for (let i = 0 ; i < randomNumbers.length; i++){
    
            if (userNumbers.includes(randomNumbers[i])){
                foundNumbers.push(randomNumbers[i]);
            }
        
        }
        
        inputSection.classList.add('d-none');
        scoreSection.classList.remove('d-none')
    
        score.innerText = ' ' + foundNumbers.length + ' '
        numbersFoundbyUser.innerText = ' ' + foundNumbers.join(' ');
        // .innerText = foundNumbers.length;
    
    });

});
