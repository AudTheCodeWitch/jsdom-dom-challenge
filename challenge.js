let number = document.getElementById('counter');
let counter = parseInt(number.innerText);

document.addEventListener( "DOMContentLoaded", function () {
    startCounter()
} );

const startCounter = function startCounter() {
    setInterval(function () {
        counter ++;
        number.innerText = counter.toString();

    }, 1000);
    console.log("Counter Started");
};

const plus = document.getElementById('plus');

plus.addEventListener("click", function() {
    incrementCounter()
} );

const incrementCounter = function incrementCounter() {
    counter ++;
    number.innerText = counter.toString();
    console.log('incremented')

};

const minus = document.getElementById('minus');

minus.addEventListener("click", function() {
    decrementCounter()
} );

const decrementCounter = function decrementCounter() {
    counter --;
    number.innerText = counter.toString();
    console.log('decremented')

};