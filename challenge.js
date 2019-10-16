let number = document.getElementById('counter');
let counter = parseInt(number.innerText);
let interval;

const autoIncrementCounter = function () {
    console.log('inside autoCounter');
    console.log(interval);
    interval = setInterval(function () {
        console.log('inside interval');
        counter ++;
        number.innerText = counter.toString();
    }, 1000);
};

document.addEventListener( "DOMContentLoaded", function () {
    autoIncrementCounter()
} );

let pause = document.getElementById('pause');
let pauseCount = 0;

const pauseCounter = function pauseCounter() {
    clearInterval(interval)
};

pause.addEventListener('click', function(){
    pauseCount ++;
    if (pauseCount % 2 === 0) {
        let resume = document.getElementById('resume');
        resume.innerText = 'pause';
        resume.id = 'pause';
        autoIncrementCounter();
        console.log(pauseCount + ' resumed');
    } else {
        pause.innerText = 'resume';
        pause.id = 'resume';
        pauseCounter();
        console.log(pauseCount + ' paused');
    }
});











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