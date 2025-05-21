// Change the id attribute from navBar to socialNetworkNavigation
const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// Create new li element
const newLi = document.createElement("li");

// Create text node with "Logout"
const logoutText = document.createTextNode("Logout");

// Append text node to li
newLi.appendChild(logoutText);

// Append li to ul
const ul = navBar.querySelector("ul");
ul.appendChild(newLi);

// Get first and last li elements
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

// Display text of each link
console.log(firstLi.textContent);
console.log(lastLi.textContent);
