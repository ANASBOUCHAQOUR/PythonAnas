// Array of quote objects
        let quotes = [
            {
                id: 0,
                author: "Albert Einstein",
                quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
                likes: 0
            },
            {
                id: 1,
                author: "Maya Angelou",
                quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                likes: 0
            },
            {
                id: 2,
                author: "Steve Jobs",
                quote: "Innovation distinguishes between a leader and a follower.",
                likes: 0
            },
            {
                id: 3,
                author: "Nelson Mandela",
                quote: "It always seems impossible until it's done.",
                likes: 0
            },
            {
                id: 4,
                author: "Oscar Wilde",
                quote: "Be yourself; everyone else is already taken.",
                likes: 0
            },
            {
                id: 5,
                author: "Mark Twain",
                quote: "The two most important days in your life are the day you are born and the day you find out why.",
                likes: 0
            },
            {
                id: 6,
                author: "Albert Einstein",
                quote: "Try not to become a person of success, but rather try to become a person of value.",
                likes: 0
            }
        ];

        // Variables for current state
        let currentQuote = null;
        let lastQuoteId = null;
        let filteredQuotes = [];
        let currentFilterIndex = 0;
        let isFiltering = false;

        // Generate random quote function
        const generateRandomQuote = () => {
            let randomQuote;
            
            // Ensure we don't show the same quote twice in a row
            do {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                randomQuote = quotes[randomIndex];
            } while (randomQuote.id === lastQuoteId && quotes.length > 1);
            
            currentQuote = randomQuote;
            lastQuoteId = randomQuote.id;
            isFiltering = false;
            
            displayQuote(randomQuote);
            hideNavigation();
        };

        // Display quote function
        const displayQuote = (quote) => {
            const quoteText = document.getElementById('quoteText');
            const quoteAuthor = document.getElementById('quoteAuthor');
            const quoteStats = document.getElementById('quoteStats');
            
            quoteText.textContent = `"${quote.quote}"`;
            quoteAuthor.textContent = `— ${quote.author}`;
            
            // Display basic stats
            quoteStats.innerHTML = `
                <div class="stat-info">ID: ${quote.id}</div>
                <div class="stat-info">❤️ ${quote.likes} likes</div>
            `;
        };

        // Character count functions
        const showCharCount = (includeSpaces) => {
            if (!currentQuote) return;
            
            const quote = currentQuote.quote;
            const count = includeSpaces ? quote.length : quote.replace(/\s/g, '').length;
            const type = includeSpaces ? 'with spaces' : 'without spaces';
            
            alert(`Character count (${type}): ${count}`);
        };

        // Word count function
        const showWordCount = () => {
            if (!currentQuote) return;
            
            const words = currentQuote.quote.trim().split(/\s+/).filter(word => word.length > 0);
            alert(`Word count: ${words.length}`);
        };

        // Like quote function
        const likeQuote = () => {
            if (!currentQuote) return;
            
            // Find the quote in the array and increment likes
            const quoteIndex = quotes.findIndex(q => q.id === currentQuote.id);
            if (quoteIndex !== -1) {
                quotes[quoteIndex].likes++;
                currentQuote.likes++;
                
                // Update display
                const quoteStats = document.getElementById('quoteStats');
                quoteStats.innerHTML = `
                    <div class="stat-info">ID: ${currentQuote.id}</div>
                    <div class="stat-info">❤️ ${currentQuote.likes} likes</div>
                `;
                
                // Show feedback
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = '❤️ Liked!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 1000);
            }
        };

        // Add new quote form handler
        document.getElementById('addQuoteForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const quoteInput = document.getElementById('newQuote');
            const authorInput = document.getElementById('newAuthor');
            const successMsg = document.getElementById('addSuccess');
            const errorMsg = document.getElementById('addError');
            
            const quote = quoteInput.value.trim();
            const author = authorInput.value.trim();
            
            if (!quote || !author) {
                errorMsg.style.display = 'block';
                successMsg.style.display = 'none';
                return;
            }
            
            // Create new quote object
            const newQuote = {
                id: quotes.length,
                author: author,
                quote: quote,
                likes: 0
            };
            
            quotes.push(newQuote);
            
            // Reset form and show success
            quoteInput.value = '';
            authorInput.value = '';
            successMsg.style.display = 'block';
            errorMsg.style.display = 'none';
            
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
        });

        // Filter form handler
        document.getElementById('filterForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const authorFilter = document.getElementById('authorFilter').value.trim().toLowerCase();
            const filterResults = document.getElementById('filterResults');
            const filterError = document.getElementById('filterError');
            
            if (!authorFilter) return;
            
            // Filter quotes by author (case insensitive)
            filteredQuotes = quotes.filter(quote => 
                quote.author.toLowerCase().includes(authorFilter)
            );
            
            if (filteredQuotes.length === 0) {
                filterError.style.display = 'block';
                filterResults.innerHTML = '';
                return;
            }
            
            filterError.style.display = 'none';
            currentFilterIndex = 0;
            isFiltering = true;
            
            displayFilteredQuote();
            showNavigation();
            
            filterResults.innerHTML = `Found ${filteredQuotes.length} quote(s) by authors matching "${authorFilter}"`;
        });

        // Display filtered quote
        const displayFilteredQuote = () => {
            if (filteredQuotes.length === 0) return;
            
            currentQuote = filteredQuotes[currentFilterIndex];
            displayQuote(currentQuote);
            
            // Update navigation buttons
            updateNavigationButtons();
        };

        // Navigation functions
        const previousQuote = () => {
            if (!isFiltering || filteredQuotes.length === 0) return;
            
            currentFilterIndex = (currentFilterIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
            displayFilteredQuote();
        };

        const nextQuote = () => {
            if (!isFiltering || filteredQuotes.length === 0) return;
            
            currentFilterIndex = (currentFilterIndex + 1) % filteredQuotes.length;
            displayFilteredQuote();
        };

        // Update navigation buttons
        const updateNavigationButtons = () => {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            if (filteredQuotes.length <= 1) {
                prevBtn.disabled = true;
                nextBtn.disabled = true;
            } else {
                prevBtn.disabled = false;
                nextBtn.disabled = false;
            }
        };

        // Show/hide navigation
        const showNavigation = () => {
            document.getElementById('navigationButtons').style.display = 'flex';
        };

        const hideNavigation = () => {
            document.getElementById('navigationButtons').style.display = 'none';
        };

        // Show all quotes function
        const showAllQuotes = () => {
            isFiltering = false;
            hideNavigation();
            document.getElementById('filterResults').innerHTML = '';
            document.getElementById('filterError').style.display = 'none';
            document.getElementById('authorFilter').value = '';
            
            if (quotes.length > 0) {
                generateRandomQuote();
            }
        };

        // Initialize with a random quote
        window.addEventListener('load', () => {
            generateRandomQuote();
        });