// Array of planets with their properties
const planets = [
    { name: 'Mercury', color: '#A9A9A9' },  // Gray
    { name: 'Venus', color: '#DEB887' },    // Burlywood
    { name: 'Earth', color: '#4169E1' },    // Royal Blue
    { name: 'Mars', color: '#CD5C5C' },     // Indian Red
    { name: 'Jupiter', color: '#DAA520' },  // Goldenrod
    { name: 'Saturn', color: '#F4A460' },   // Sandy Brown
    { name: 'Uranus', color: '#87CEEB' },   // Sky Blue
    { name: 'Neptune', color: '#1E90FF' }   // Dodger Blue
];

// section element
const section = document.querySelector('.listPlanets');

// Create and append planets
for (const planet of planets) {
    // Create planet div
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.backgroundColor = planet.color;
    
    // Add planet name
    const planetName = document.createElement('span');
    planetName.textContent = planet.name;
    planetName.style.color = 'white';
    planetName.style.position = 'absolute';
    planetName.style.top = '50%';
    planetName.style.left = '50%';
    planetName.style.transform = 'translate(-50%, -50%)';
    planetDiv.appendChild(planetName);

    section.appendChild(planetDiv);
}
