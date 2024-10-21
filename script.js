// script.js
document.getElementById('spinButton').addEventListener('click', function() {
    const button = this;

    // Add the spin class
    button.classList.add('spin');

    // Remove the class after the animation ends to reset it
    button.addEventListener('animationend', function() {
        button.classList.remove('spin');
    }, { once: true });
});
