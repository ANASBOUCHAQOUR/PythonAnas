// Constants and DOM elements
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

// Fetch a random GIF based on search term
async function fetchRandomGif(searchTerm) {
    try {
        // First, get the total count of GIFs for the search term
        const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=1`;
        const searchResponse = await fetch(searchUrl);
        
        if (!searchResponse.ok) {
            throw new Error(`HTTP error! status: ${searchResponse.status}`);
        }

        const searchData = await searchResponse.json();
        const totalCount = searchData.pagination.total_count;

        if (totalCount === 0) {
            throw new Error('No GIFs found for this search term');
        }

        // Then, get a random GIF using the total count
        const randomOffset = Math.floor(Math.random() * totalCount);
        const randomUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=1&offset=${randomOffset}`;
        
        const randomResponse = await fetch(randomUrl);
        
        if (!randomResponse.ok) {
            throw new Error(`HTTP error! status: ${randomResponse.status}`);
        }

        const randomData = await randomResponse.json();
        return randomData.data[0];
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Display a single GIF with delete button
function displayGif(gif) {
    // Remove the "no results" message if it exists
    const noResults = gifContainer.querySelector('.no-results');
    if (noResults) {
        noResults.remove();
    }

    const gifDiv = document.createElement('div');
    gifDiv.className = 'gif-item';
    gifDiv.dataset.id = gif.id;

    const gifContent = document.createElement('div');
    gifContent.className = 'gif-content';

    const img = document.createElement('img');
    img.src = gif.images.original.url;
    img.alt = gif.title;

    const title = document.createElement('div');
    title.className = 'gif-title';
    title.textContent = gif.title;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'DELETE';
    deleteBtn.onclick = () => deleteGif(gifDiv);

    gifContent.appendChild(img);
    gifContent.appendChild(title);
    gifDiv.appendChild(gifContent);
    gifDiv.appendChild(deleteBtn);

    // Add the new GIF at the top of the container
    gifContainer.insertBefore(gifDiv, gifContainer.firstChild);
}

// Delete a specific GIF
function deleteGif(gifElement) {
    gifElement.remove();
    
    // If no GIFs left, show the "no results" message
    if (gifContainer.children.length === 0) {
        gifContainer.innerHTML = `
            <div class="no-results">Enter a search term to find GIFs</div>
        `;
    }
}

// Delete all GIFs
function deleteAllGifs() {
    gifContainer.innerHTML = `
        <div class="no-results">Enter a search term to find GIFs</div>
    `;
}

// Display error message
function displayError(message) {
    gifContainer.innerHTML = `
        <div class="error-message">
            Error: ${message}
        </div>
    `;
}

// Event Listeners
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        try {
            // Show loading state
            gifContainer.innerHTML = `
                <div class="loading">Loading random GIF...</div>
            `;
            
            const gif = await fetchRandomGif(searchTerm);
            displayGif(gif);
        } catch (error) {
            displayError(error.message);
        }
    }
});

deleteAllBtn.addEventListener('click', deleteAllGifs); 