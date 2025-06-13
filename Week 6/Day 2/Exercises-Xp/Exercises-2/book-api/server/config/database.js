// In-memory database simulation
// In a real application, this would connect to a actual database like MongoDB, PostgreSQL, etc.

let books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960,
        genre: "Fiction",
        isbn: "978-0-06-112008-4",
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949,
        genre: "Dystopian Fiction",
        isbn: "978-0-452-28423-4",
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-02')
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813,
        genre: "Romance",
        isbn: "978-0-14-143951-8",
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03')
    },
    {
        id: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925,
        genre: "Fiction",
        isbn: "978-0-7432-7356-5",
        createdAt: new Date('2024-01-04'),
        updatedAt: new Date('2024-01-04')
    }
];

// Counter for generating new IDs
let nextId = 5;

const database = {
    // Get all books
    getAllBooks: () => books,
    
    // Get book by ID
    getBookById: (id) => books.find(book => book.id === parseInt(id)),
    
    // Create new book
    createBook: (bookData) => {
        const newBook = {
            id: nextId++,
            ...bookData,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        books.push(newBook);
        return newBook;
    },
    
    // Update book
    updateBook: (id, updateData) => {
        const index = books.findIndex(book => book.id === parseInt(id));
        if (index === -1) return null;
        
        books[index] = {
            ...books[index],
            ...updateData,
            id: parseInt(id), // Ensure ID doesn't change
            updatedAt: new Date()
        };
        return books[index];
    },
    
    // Delete book
    deleteBook: (id) => {
        const index = books.findIndex(book => book.id === parseInt(id));
        if (index === -1) return null;
        
        const deletedBook = books[index];
        books.splice(index, 1);
        return deletedBook;
    },
    
    // Search books
    searchBooks: (query) => {
        const searchTerm = query.toLowerCase();
        return books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm)
        );
    },
    
    // Get books by author
    getBooksByAuthor: (author) => {
        return books.filter(book => 
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    },
    
    // Get books by year range
    getBooksByYearRange: (startYear, endYear) => {
        return books.filter(book => 
            book.publishedYear >= startYear && book.publishedYear <= endYear
        );
    }
};

module.exports = database;