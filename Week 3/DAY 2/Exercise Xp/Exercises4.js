// Function to calculate hotel cost
function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

// Function to calculate plane ride cost
function planeRideCost(destination) {
    switch(destination.toLowerCase()) {
        case 'london':
            return 183;
        case 'paris':
            return 220;
        default:
            return 300;
    }
}

// Function to calculate rental car cost
function rentalCarCost(days) {
    const costPerDay = 40;
    let totalCost = days * costPerDay;
    
    // Apply 5% discount for rentals over 10 days
    if (days > 10) {
        totalCost = totalCost * 0.95; // 5% discount
    }
    
    return totalCost;
}

// Function to calculate total vacation cost
function totalVacationCost() {
    // Get number of nights for hotel
    let nights;
    do {
        nights = Number.parseInt(prompt("How many nights would you like to stay in the hotel?"));
    } while (Number.isNaN(nights));

    // Get destination for plane
    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (!destination || typeof destination !== 'string');

    // Get number of days for car rental
    let days;
    do {
        days = Number.parseInt(prompt("How many days would you like to rent the car?"));
    } while (Number.isNaN(days));

    // Calculate all costs
    const carCost = rentalCarCost(days);
    const hotelCostTotal = hotelCost(nights);
    const planeCost = planeRideCost(destination);

    // Return the total cost breakdown
    return `The car cost: $${carCost}, the hotel cost: $${hotelCostTotal}, the plane tickets cost: $${planeCost}`;
}

// Call the function to start the vacation cost calculation
console.log(totalVacationCost());
