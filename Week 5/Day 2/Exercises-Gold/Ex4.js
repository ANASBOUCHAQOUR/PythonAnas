// Modified version of the fetch function using async/await
// Includes error handling with try/catch

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

// Modified function using async/await
const getData = async function() {
    try {
        // Map each URL to a fetch promise
        const promises = urls.map(async url => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });

        // Wait for all promises to resolve
        const [users, posts, albums] = await Promise.all(promises);
        
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (error) {
        console.log('ooooooops');
        console.error('Error:', error.message);
    }
}

// Test the function
getData();

// To test the error handling, you can modify one of the URLs to be invalid
// For example:
// const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://invalid-url.com/posts",  // This will cause an error
//     "https://jsonplaceholder.typicode.com/albums"
// ]; 