// DOM Elements
const sunriseForm = document.getElementById('sunriseForm');
const parisBtn = document.getElementById('parisBtn');
const newyorkBtn = document.getElementById('newyorkBtn');
const results = document.getElementById('results');
const loading = results.querySelector('.loading');
const errorMessage = results.querySelector('.error-message');
const sunriseResults = results.querySelector('.sunrise-results');
const cityResults = sunriseResults.querySelectorAll('.city-result');

// City Coordinates
const cityCoordinates = {
    paris: {
        lat: 48.864716,
        lon: 2.349014
    },
    newyork: {
        lat: 40.730610,
        lon: -73.935242
    }
};

// Fetch sunrise time for a single city
async function fetchSunriseTime(lat, lon) {
    try {
        const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.status !== 'OK') {
            throw new Error(data.message || 'Failed to fetch sunrise time');
        }

        // Convert UTC time to local time
        const sunriseUTC = new Date(data.results.sunrise);
        return sunriseUTC.toLocaleTimeString();
    } catch (error) {
        console.error('Error fetching sunrise time:', error);
        throw error;
    }
}

// Fetch sunrise times for both cities using Promise.all
async function fetchBothSunriseTimes(coords1, coords2) {
    try {
        // Show loading state
        loading.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        sunriseResults.classList.add('hidden');

        // Use Promise.all to fetch both sunrise times concurrently
        const [sunrise1, sunrise2] = await Promise.all([
            fetchSunriseTime(coords1.lat, coords1.lon),
            fetchSunriseTime(coords2.lat, coords2.lon)
        ]);

        // Update the results
        cityResults[0].querySelector('.sunrise-time').textContent = sunrise1;
        cityResults[1].querySelector('.sunrise-time').textContent = sunrise2;

        // Show results
        loading.classList.add('hidden');
        sunriseResults.classList.remove('hidden');
    } catch (error) {
        // Handle errors
        loading.classList.add('hidden');
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
    }
}

// Handle form submission
sunriseForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const coords1 = {
        lat: parseFloat(document.getElementById('lat1').value),
        lon: parseFloat(document.getElementById('lon1').value)
    };

    const coords2 = {
        lat: parseFloat(document.getElementById('lat2').value),
        lon: parseFloat(document.getElementById('lon2').value)
    };

    // Validate coordinates
    if (isNaN(coords1.lat) || isNaN(coords1.lon) || isNaN(coords2.lat) || isNaN(coords2.lon)) {
        errorMessage.textContent = 'Please enter valid coordinates for both cities';
        errorMessage.classList.remove('hidden');
        return;
    }

    await fetchBothSunriseTimes(coords1, coords2);
});

// Handle preset buttons
parisBtn.addEventListener('click', () => {
    document.getElementById('lat1').value = cityCoordinates.paris.lat;
    document.getElementById('lon1').value = cityCoordinates.paris.lon;
});

newyorkBtn.addEventListener('click', () => {
    document.getElementById('lat2').value = cityCoordinates.newyork.lat;
    document.getElementById('lon2').value = cityCoordinates.newyork.lon;
}); 