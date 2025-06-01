// Get references to the form and output div
const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const outputDiv = document.getElementById('output');

// Add an event listener for the form submission
myForm.addEventListener('submit', (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the values from the input fields
  const name = nameInput.value;
  const lastName = lastNameInput.value;

  // Create a JavaScript object
  const formData = {
    name: name,
    lastname: lastName
  };

  // Convert the JavaScript object to a JSON string
  const formDataJSON = JSON.stringify(formData);

  // Display the JSON string in the output div
  outputDiv.textContent = formDataJSON;
}); 