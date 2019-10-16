let number = document.getElementById('counter');
let counter = parseInt(number.innerText);
let interval;

const autoIncrementCounter = function () {
    interval = setInterval(function () {
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

const disableBtn = function() {
    heart.disabled = true;
    plus.disabled = true;
    minus.disabled = true;
    submit.disabled = true;
};

const enableBtn = function() {
    heart.disabled = false;
    plus.disabled = false;
    minus.disabled = false;
    submit.disabled = false;
};

pause.addEventListener('click', function(){
    pauseCount ++;
    if (pauseCount % 2 === 0) {
        let resume = document.getElementById('resume');
        resume.innerText = 'pause';
        resume.id = 'pause';
        enableBtn();
        autoIncrementCounter();
        console.log(pauseCount + ' resumed');
    } else {
        pause.innerText = 'resume';
        pause.id = 'resume';
        pauseCounter();
        disableBtn();
        console.log(pauseCount + ' paused');
    }
});

const plus = document.getElementById('plus');

plus.addEventListener("click", function() {
    incrementCounter()
} );

const heart = document.getElementById('heart');
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

const submit = document.getElementById('submit');
const commentsDiv = document.getElementById('list');
const commentsOl = document.createElement('ol');
commentsDiv.appendChild(commentsOl);

const form = document.getElementById('comment-form');
form.addEventListener('submit', function (event) {
    let comment = document.getElementById('comment-input').value;
    event.preventDefault();
    let commentli = document.createElement('li');
    commentli.appendChild(document.createTextNode(comment));
    commentsOl.appendChild(commentli)
});