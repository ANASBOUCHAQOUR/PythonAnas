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

const bookSection = document.querySelector(".listBooks");

for (const book of allBooks) {
    const bookDiv = document.createElement("div");
    
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.width = 100;
    
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }
    
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);
    
    bookSection.appendChild(bookDiv);
}
