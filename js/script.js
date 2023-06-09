console.log('JS ok')


const counter = document.getElementById('counter');
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

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

let timer = 5;

const reverse = setInterval(function(){
    const countDown = --timer
    counter.innerHTML = countDown

    if (countDown === 0){
        clearInterval(reverse);
        numbers.classList.remove('d-none')
        numbers.innerHTML = getRandomNumbers(5);
    }

}, 1000)

