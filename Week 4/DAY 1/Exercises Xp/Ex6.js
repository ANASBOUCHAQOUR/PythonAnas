// Exercise 6: Fortune teller

((numChildren, partnerName, geoLoc, jobTitle) => {
    // Get the div element to display the fortune
    const fortuneOutputDiv = document.getElementById('fortuneOutput');

    // Check if the div exists
    if (fortuneOutputDiv) {
        // Construct the fortune sentence
        const fortuneSentence = `You will be a ${jobTitle} in ${geoLoc}, and married to ${partnerName} with ${numChildren} kids.`;

        // Display the sentence in the div
        fortuneOutputDiv.textContent = fortuneSentence;
    } else {
        console.error("Error: fortuneOutput div not found in the DOM.");
    }

})(3, 'Anna', 'Casablanca', 'Web Developer'); // Self-invoking with example arguments 