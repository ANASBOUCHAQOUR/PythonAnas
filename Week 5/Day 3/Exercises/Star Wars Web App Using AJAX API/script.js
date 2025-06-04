// DOM elements
const fetchBtn = document.getElementById('fetchBtn');
const characterContainer = document.getElementById('characterContainer');
const characterContent = document.getElementById('characterContent');
const loadingContainer = document.getElementById('loadingContainer');
const errorContainer = document.getElementById('errorContainer');

// API configuration
const API_BASE_URL = 'https://www.swapi.tech/api/people';
const MAX_CHARACTERS = 83;

// Function to hide all containers
function hideAllContainers() {
    characterContainer.classList.add('hidden');
    loadingContainer.classList.add('hidden');
    errorContainer.classList.add('hidden');
}

// Function to show loading state
function showLoading() {
    hideAllContainers();
    loadingContainer.classList.remove('hidden');
}

// Function to show error state
function showError() {
    hideAllContainers();
    errorContainer.classList.remove('hidden');
}

// Function to get random character ID
function getRandomCharacterId() {
    return Math.floor(Math.random() * MAX_CHARACTERS) + 1;
}

// Function to fetch homeworld data
async function fetchHomeworld(homeworldUrl) {
    try {
        const response = await fetch(homeworldUrl);
        if (!response.ok) throw new Error('Failed to fetch homeworld');
        const data = await response.json();
        return data.result.properties.name;
    } catch (error) {
        console.error('Error fetching homeworld:', error);
        return 'Unknown';
    }
}

// Function to fetch character data
async function fetchCharacter() {
    showLoading();
    
    try {
        const characterId = getRandomCharacterId();
        const response = await fetch(`${API_BASE_URL}/${characterId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const character = data.result.properties;
        
        // Fetch homeworld name
        const homeworldName = await fetchHomeworld(character.homeworld);
        
        // Display character data
        displayCharacter({
            name: character.name,
            height: character.height,
            gender: character.gender,
            birth_year: character.birth_year,
            homeworld: homeworldName
        });
        
    } catch (error) {
        console.error('Error fetching character:', error);
        showError();
    }
}

// Function to display character data
function displayCharacter(character) {
    const characterHtml = `
        <div class="character-name">${character.name}</div>
        <div class="character-info">
            <div class="info-item">
                <div class="info-label">Height</div>
                <div class="info-value">${character.height === 'unknown' ? 'Unknown' : character.height + ' cm'}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Gender</div>
                <div class="info-value">${character.gender}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Birth Year</div>
                <div class="info-value">${character.birth_year}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Homeworld</div>
                <div class="info-value">${character.homeworld}</div>
            </div>
        </div>
    `;
    
    characterContent.innerHTML = characterHtml;
    hideAllContainers();
    characterContainer.classList.remove('hidden');
}

// Event listener for fetch button
fetchBtn.addEventListener('click', fetchCharacter);

// Initial load - fetch a character when page loads
window.addEventListener('load', fetchCharacter);