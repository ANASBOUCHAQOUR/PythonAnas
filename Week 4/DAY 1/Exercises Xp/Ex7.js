// Exercise 7: Welcome

((userName) => {
    const userInfoDiv = document.getElementById('userInfo');

    if (userInfoDiv) {
        // Create a new div for the user info
        const userDisplayDiv = document.createElement('div');
        userDisplayDiv.className = 'user-info';

        // Create a span for the user's name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `Welcome, ${userName}!`;

        // Create a placeholder for the profile picture
        const profilePicPlaceholder = document.createElement('div');
        profilePicPlaceholder.className = 'profile-pic'; // Apply CSS for styling

        // Append the name and profile pic to the user info div
        userDisplayDiv.appendChild(nameSpan);
        userDisplayDiv.appendChild(profilePicPlaceholder);

        // Append the user info div to the navbar's userInfo div
        userInfoDiv.appendChild(userDisplayDiv);
        
    } else {
        console.error("Error: userInfo div not found in the DOM.");
    }

})('John'); // Self-invoking with the user name 'John' 