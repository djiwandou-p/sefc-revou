document.getElementById('colorButton').addEventListener('click', () => {
    const box = document.getElementById('colorBox');
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    box.textContent = `Color changed to ${randomColor}!`;
});