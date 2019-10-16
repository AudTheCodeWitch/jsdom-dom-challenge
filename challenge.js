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

const heart = document.getElementById('heart');
const likes = document.getElementsByClassName('likes')[0];

heart.addEventListener("click", function() {
    likeCounter()
} );

const likeCounter = function likeCounter() {
    number.innerText = counter.toString();
    if (document.getElementById(counter.toString())) {
        let li = document.getElementById(counter.toString());
        let like = li.innerText.split(' ')[3];
        like ++;
        li.innerText = `${counter.toString()} was liked ${like} times!`;
    } else {
        let li = document.createElement('li');
        li.id = counter.toString();
        li.appendChild(document.createTextNode(`${counter.toString()} was liked 1 time!`));
        likes.appendChild(li);
    }
};