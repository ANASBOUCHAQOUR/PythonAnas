const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Convert object to array of arrays
const usersArray = Object.entries(users);
console.log(usersArray);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Part 2: Multiply each ID by 2
const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(modifiedUsersArray);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ] 