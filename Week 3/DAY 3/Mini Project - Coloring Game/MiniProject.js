// Game state
let isDrawing = false;
let currentColor = '#000000';
let isEraser = false;

// Color palette options - matching the reference game colors
const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', 
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#008000', '#800000', '#008080', '#000080', '#808080'
];

// DOM Elements
const colorPalette = document.getElementById('colorPalette');
const drawingGrid = document.getElementById('drawingGrid');
const clearButton = document.getElementById('clearButton');
const eraserButton = document.getElementById('eraserButton');

// Create color palette
function createColorPalette() {
    for (const color of colors) {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color;
        colorOption.dataset.color = color;
        
        // Add border to black color by default
        if (color === '#000000') {
            colorOption.classList.add('selected');
        }
        
        colorOption.addEventListener('click', () => selectColor(colorOption));
        colorPalette.appendChild(colorOption);
    }
}

// Create drawing grid
function createDrawingGrid() {
    // Create 20x20 grid (400 cells)
    for (let i = 0; i < 400; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        
        // Add mouse event listeners for drawing
        cell.addEventListener('mousedown', startDrawing);
        cell.addEventListener('mouseover', draw);
        cell.addEventListener('mouseup', stopDrawing);
        cell.addEventListener('mouseleave', stopDrawing);
        
        drawingGrid.appendChild(cell);
    }
}

// Color selection
function selectColor(colorElement) {
    // Remove selected class from all colors
    const colorOptions = document.querySelectorAll('.color-option');
    for (const option of colorOptions) {
        option.classList.remove('selected');
    }
    
    // Add selected class to clicked color
    colorElement.classList.add('selected');
    
    // Update current color and disable eraser
    currentColor = colorElement.dataset.color;
    isEraser = false;
    eraserButton.classList.remove('active');
    eraserButton.style.backgroundColor = '#f44336';
}

// Drawing functions
function startDrawing(event) {
    isDrawing = true;
    draw(event);
}

function draw(event) {
    if (!isDrawing) return;
    
    const cell = event.target;
    if (cell.classList.contains('grid-cell')) {
        cell.style.backgroundColor = isEraser ? '#FFFFFF' : currentColor;
    }
}

function stopDrawing() {
    isDrawing = false;
}

// Clear grid
function clearGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    for (const cell of cells) {
        cell.style.backgroundColor = '#FFFFFF';
    }
}

// Toggle eraser
function toggleEraser() {
    isEraser = !isEraser;
    eraserButton.classList.toggle('active');
    
    if (isEraser) {
        eraserButton.style.backgroundColor = '#da190b';
    } else {
        eraserButton.style.backgroundColor = '#f44336';
        // Reselect the last selected color
        const selectedColor = document.querySelector('.color-option.selected');
        if (selectedColor) {
            currentColor = selectedColor.dataset.color;
        }
    }
}

// Event listeners
clearButton.addEventListener('click', clearGrid);
eraserButton.addEventListener('click', toggleEraser);

// Prevent default drag behavior
document.addEventListener('dragstart', (e) => e.preventDefault());

// Initialize the game
function initGame() {
    createColorPalette();
    createDrawingGrid();
}

// Start the game when the page loads
window.addEventListener('load', initGame); 