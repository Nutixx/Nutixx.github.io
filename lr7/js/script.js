const fahrenheit = document.getElementsByName('fahrenheit')[0];
const celsius = document.getElementsByName('celsius')[0];
const convertorWrapper = document.querySelector('.converter');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

convertorWrapper.addEventListener('change', (event) => {
    const target = event.target;
    if (target == celsius) {
        fahrenheit.value = (+target.value / 1.8) - 32
    }
    else if (target == fahrenheit) {
        celsius.value = (+target.value * 1.8) + 32
    }
})

const math = document.querySelector('.math');
const newBtn = document.getElementById('newTask');
const checkBtn = document.getElementById('check');
const solution = document.getElementsByName('solution')[0];
const task = document.getElementsByName('task')[0];
let firstRandom;
let secondRandom;
let resultRandom;
let globalCounter = 0;
let counter = 0;
let chance = true;

function mathTask(event) {
    const target = event.target;
    if (target == newBtn && globalCounter != 10) {
        globalCounter++;
        firstRandom = getRandomInt(9);
        secondRandom = getRandomInt(9);
        resultRandom = firstRandom * secondRandom;
        task.innerHTML = `${firstRandom} x ${secondRandom} = `;
        chance = true;
    }
    else if (target == checkBtn && chance == true) {
        if (solution.value == +resultRandom) {
            ++counter
        }
        chance = false;
    }
    math.querySelector('p').innerHTML = `Загальний рахунок ${counter * 10}% (${counter} правильних відповідей з ${globalCounter})`
}

math.addEventListener('click', (event) => mathTask(event));


