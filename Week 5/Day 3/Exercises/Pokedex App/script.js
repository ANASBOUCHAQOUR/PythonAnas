// Global variables
let currentPokemonId = 1;
const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// DOM elements
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonHeight = document.getElementById('pokemon-height');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonTypes = document.getElementById('pokemon-types');
const pokemonDisplay = document.getElementById('pokemon-display');
const loadingElement = document.getElementById('loading');
const errorMessage = document.getElementById('error-message');

// Buttons
const randomBtn = document.getElementById('random-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Event listeners
randomBtn.addEventListener('click', fetchRandomPokemon);
prevBtn.addEventListener('click', fetchPreviousPokemon);
nextBtn.addEventListener('click', fetchNextPokemon);

// Show loading state
function showLoading() {
    pokemonDisplay.classList.add('hidden');
    errorMessage.classList.add('hidden');
    loadingElement.classList.remove('hidden');
}

// Hide loading state
function hideLoading() {
    loadingElement.classList.add('hidden');
}

// Show error message
function showError() {
    pokemonDisplay.classList.add('hidden');
    loadingElement.classList.add('hidden');
    errorMessage.classList.remove('hidden');
}

// Show pokemon data
function showPokemon() {
    errorMessage.classList.add('hidden');
    loadingElement.classList.add('hidden');
    pokemonDisplay.classList.remove('hidden');
}

// Fetch pokemon data by ID
async function fetchPokemon(id) {
    showLoading();
    
    try {
        const response = await fetch(`${API_BASE_URL}${id}`);
        
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        
        const pokemon = await response.json();
        displayPokemon(pokemon);
        currentPokemonId = pokemon.id;
        updateNavigationButtons();
        
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        showError();
    } finally {
        hideLoading();
    }
}

// Display pokemon data
function displayPokemon(pokemon) {
    // Update image
    pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default || 
                      pokemon.sprites.front_default || 
                      'https://via.placeholder.com/200x200?text=No+Image';
    pokemonImage.alt = pokemon.name;
    
    // Update basic info
    pokemonName.textContent = pokemon.name;
    pokemonId.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
    
    // Update stats
    pokemonHeight.textContent = `${(pokemon.height / 10).toFixed(1)}m`;
    pokemonWeight.textContent = `${(pokemon.weight / 10).toFixed(1)}kg`;
    
    // Update types
    pokemonTypes.innerHTML = '';
    pokemon.types.forEach(typeInfo => {
        const typeBadge = document.createElement('span');
        typeBadge.className = `type-badge type-${typeInfo.type.name}`;
        typeBadge.textContent = typeInfo.type.name;
        pokemonTypes.appendChild(typeBadge);
    });
    
    showPokemon();
}

// Fetch random pokemon
async function fetchRandomPokemon() {
    // Generate random ID between 1 and 1010 (total number of Pokemon in API)
    const randomId = Math.floor(Math.random() * 1010) + 1;
    await fetchPokemon(randomId);
}

// Fetch previous pokemon
async function fetchPreviousPokemon() {
    if (currentPokemonId > 1) {
        await fetchPokemon(currentPokemonId - 1);
    }
}

// Fetch next pokemon
async function fetchNextPokemon() {
    if (currentPokemonId < 1010) {
        await fetchPokemon(currentPokemonId + 1);
    }
}

// Update navigation buttons state
function updateNavigationButtons() {
    prevBtn.disabled = currentPokemonId <= 1;
    nextBtn.disabled = currentPokemonId >= 1010;
}

// Initialize app
function init() {
    // Set initial state
    pokemonImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
    pokemonName.textContent = 'Click Random to start!';
    pokemonId.textContent = '#000';
    pokemonHeight.textContent = '-';
    pokemonWeight.textContent = '-';
    pokemonTypes.innerHTML = '';
    
    updateNavigationButtons();
}

// Start the app
init();