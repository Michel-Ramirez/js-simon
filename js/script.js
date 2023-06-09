console.log('JS ok')


const counter = document.getElementById('counter');
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');
const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const thirdInput = document.getElementById('third-input');
const fourdInput = document.getElementById('fourd-input');
const buttonInput = document.getElementById('btn-send');

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

function getInputUsernumbers (){

    const userNumbers = [];

    firstInput.push(userNumbers);
    secondInput.push(userNumbers);
    thirdInput.push(userNumbers);
    fourdInput.push(userNumbers);

    return userNumbers;
}




let timer = 5;
numbers.innerHTML = getRandomNumbers(4).join(" ");

const reverse = setInterval(function(){
    const countDown = --timer
    counter.innerHTML = countDown

    if (countDown === 0){
        clearInterval(reverse);
        numbers.classList.add('d-none')
    }

}, 1000)

buttonInput.addEventListener('click', function (){

   const userNumbers = getInputUsernumbers();

});