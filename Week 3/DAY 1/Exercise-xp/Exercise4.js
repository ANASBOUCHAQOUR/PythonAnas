// Exercise 4: Building Management

// Building object
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// 1. Console.log the number of floors in the building
console.log("1. Number of floors:", building.numberOfFloors);

// 2. Console.log how many apartments are on the floors 1 and 3
console.log("2. Apartments on floor 1:", building.numberOfAptByFloor.firstFloor);
console.log("   Apartments on floor 3:", building.numberOfAptByFloor.thirdFloor);

// 3. Console.log the name of the second tenant and the number of rooms he has
const secondTenant = building.nameOfTenants[1]; // "Dan"
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log("3. Second tenant:", secondTenant);
console.log("   Number of rooms:", secondTenantRooms);

// 4. Check if the sum of Sarah's and David's rent is bigger than Dan's rent
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

console.log("\n4. Rent comparison:");
console.log("Sarah's rent:", sarahRent);
console.log("David's rent:", davidRent);
console.log("Dan's rent:", danRent);

if (sarahRent + davidRent > danRent) {
    console.log("Sum of Sarah's and David's rent is bigger than Dan's rent");
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200");
} else {
    console.log("Sum of Sarah's and David's rent is not bigger than Dan's rent");
}

// Show final state of Dan's rent
console.log("\nFinal state of Dan's rent:", building.numberOfRoomsAndRent.dan[1]); 