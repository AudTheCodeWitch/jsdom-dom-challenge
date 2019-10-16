let number = document.getElementById('counter');
let counter = parseInt(number.innerText);
let paused = false;
let start = setInterval(startCounter, 1000);

function startCounter() {
    counter++;
    number.innerText = counter.toString();
}

const autoIncrementCounter = function () {
    if (paused === false) {
        console.log('inside increment counter... resuming');
        start;
    } else {
        console.log('still inside... pausing');
        clearInterval(start)
    }
};

document.addEventListener( "DOMContentLoaded", function () {
    autoIncrementCounter()
} );

let pause = document.getElementById('pause');
let pauseCount = 0;

const pauseCounter = function pauseCounter() {
    paused = true;
    clearInterval()
};

pause.addEventListener('click', function(){
    pauseCount ++;
    if (pauseCount % 2 === 0) {
        paused = false;
        let resume = document.getElementById('resume');
        resume.innerText = 'pause';
        resume.id = 'pause';
        autoIncrementCounter();
        console.log(pauseCount + ' paused', paused);
    } else {
        paused = true;
        pause.innerText = 'resume';
        pause.id = 'resume';
        autoIncrementCounter();
        console.log(pauseCount + ' paused', paused);
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