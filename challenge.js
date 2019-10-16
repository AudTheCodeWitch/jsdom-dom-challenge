
document.addEventListener( "DOMContentLoaded", function () {
    startCounter()
} );

const startCounter = function startCounter() {
    let number = document.getElementById('counter');
    let counter = parseInt(number.innerText);
    setInterval(function () {
        counter ++;
        number.innerText = counter.toString();

    }, 1000);
    console.log("about to start");
};