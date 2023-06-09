console.log('JS ok')

/******* | DOM'S ELEMENT | *******/

const counter = document.getElementById('counter');
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');
const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const thirdInput = document.getElementById('third-input');
const fourthInput = document.getElementById('fourd-input');
const buttonInput = document.getElementById('btn-send');

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
    userNumbers.push(parseInt(thirdInput.value));
    userNumbers.push(parseInt(fourthInput.value));

    return userNumbers;
}


/******* | COUNTDOWN | *******/

let timer = 5;
randomNumbers = getRandomNumbers(4)
numbers.innerHTML = randomNumbers.join(" ");

console.log(randomNumbers)

const reverse = setInterval(function(){
    const countDown = --timer
    counter.innerHTML = countDown

    if (countDown === 0){
        clearInterval(reverse);
        numbers.classList.add('d-none')
    }

}, 1000)

/******* | BUTTON INPUT USER NUMBERS | *******/

buttonInput.addEventListener('click', function (){

    const userNumbers = getInputUserNumbers();
    
    for (let i = 0 ; i < randomNumbers.length; i++){
        
        foundNumbers = [];

        if (userNumbers.includes(randomNumbers)){
            foundNumbers.push(userNumbers);
        }
    
        console.log(foundNumbers)
    }


});