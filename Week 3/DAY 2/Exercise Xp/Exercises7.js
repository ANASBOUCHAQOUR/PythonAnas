// Create array of books
const allBooks = [
    {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
        alreadyRead: true
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
        alreadyRead: false
    }
];

// Get the section element
const bookSection = document.querySelector(".listBooks");

// Create and render book elements
for (const book of allBooks) {
    // Create book div
    const bookDiv = document.createElement("div");
    
    // Create book details
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    // Create book image
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.width = 100;
    
    // Set color to red if book is already read
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }
    
    // Append elements to book div
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);
    
    // Append book div to section
    bookSection.appendChild(bookDiv);
}
