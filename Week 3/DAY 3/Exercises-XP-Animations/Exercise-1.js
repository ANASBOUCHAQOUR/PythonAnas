// Part I: Alert after 2 seconds
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II: Add paragraph after 2 seconds
setTimeout(() => {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part III: Add paragraph every 2 seconds
const intervalId = setInterval(() => {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);

    // Stop when 5 paragraphs
    if (container.children.length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

// Clear interval on button click
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    clearInterval(intervalId);
});