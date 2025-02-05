document.getElementById('yes-button').addEventListener('click', function() {
    selectOption('yes');
});

function createButterflies() {
    for (let i = 0; i < 20; i++) {  // Number of butterflies
        let butterfly = document.createElement('div');
        butterfly.classList.add('butterfly');
        
        // Randomize starting position
        butterfly.style.left = Math.random() * window.innerWidth + 'px';
        butterfly.style.top = Math.random() * window.innerHeight + 'px';
        
        // Randomize animation duration
        butterfly.style.animationDuration = Math.random() * 5 + 5 + 's'; // Random between 5s and 10s
        
        // Append the butterfly to the container
        document.getElementById('butterflyContainer').appendChild(butterfly);
        
        // Remove the butterfly after the animation ends
        setTimeout(function() {
            butterfly.remove();
        }, parseFloat(butterfly.style.animationDuration) * 1000);
    }
}

function selectOption(option) {
    if (option === 'yes') {
        // Show the "Hurray" message
        document.getElementById('message').style.display = 'block';
        document.getElementById('yay-gif-container').style.display = 'block';

        // Hide the question and buttons
        document.getElementById('question').style.display = 'none';
        document.getElementById('yes-button').style.display = 'none';
        document.getElementById('no-button').style.display = 'none';
        document.getElementById('gif-container').style.display = 'none';

        // Create butterflies
        createButterflies();
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}