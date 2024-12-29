let intervalId = null;

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Start button functionality
document.getElementById('start').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            const newColor = getRandomColor();
            document.body.style.backgroundColor = newColor;
            document.querySelector('h1').innerHTML = `Background Color: ${newColor}`;
        }, 1000);
    }
});

// Stop button functionality
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});
