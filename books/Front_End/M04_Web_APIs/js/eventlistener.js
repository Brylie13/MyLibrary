// Select the button element by its ID
const button = document.getElementById('colorButton');

// Function to generate a random color and change button's background
function changeButtonColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    button.style.backgroundColor = randomColor;
    button.textContent = `Color: ${randomColor}`;
}

// Add the 'click' event listener to the button
button.addEventListener('click', changeButtonColor);
