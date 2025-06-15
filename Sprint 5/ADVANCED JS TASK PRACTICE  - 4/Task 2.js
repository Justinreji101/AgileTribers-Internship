document.addEventListener('DOMContentLoaded', function() {
    const bookTitleInput = document.getElementById('bookTitleInput');
    const searchButton = document.getElementById('searchButton');
    const showAllButton = document.getElementById('showAllButton');
    const bookResults = document.getElementById('bookResults');
    const libraryBooks = document.getElementById('libraryBooks');
    
    // Sample library data
    const books = [
        { title: '1984', author: 'George Orwell' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'Pride and Prejudice', author: 'Jane Austen' },
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
        { title: 'Fahrenheit 451', author: 'Ray Bradbury' },
        { title: 'Moby-Dick', author: 'Herman Melville' }
    ];
    
    // Function to find book by title
    function findBookByTitle(booksArray, title) {
        return booksArray.find(book => 
            book.title.toLowerCase() === title.toLowerCase()
        );
    }
    
    // Display all books in the library section
    function displayLibraryBooks() {
        libraryBooks.innerHTML = '';
        
        if (books.length === 0) {
            libraryBooks.innerHTML = '<p>No books in the library</p>';
            return;
        }
        
        books.forEach(book => {
            const bookCard = createBookCard(book);
            libraryBooks.appendChild(bookCard);
        });
    }
    
    // Create a book card element
    function createBookCard(book) {
        const card = document.createElement('div');
        card.className = 'book-card';
        
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p class="author">by ${book.author}</p>
            <p><i class="fas fa-book"></i> Available in Library</p>
        `;
        
        return card;
    }
    
    // Display search results
    function displaySearchResults(book) {
        bookResults.innerHTML = '';
        
        if (book) {
            const bookCard = createBookCard(book);
            bookResults.appendChild(bookCard);
        } else {
            bookResults.innerHTML = `
                <div class="not-found">
                    <i class="fas fa-book-dead"></i>
                    <p>Book not found in our library</p>
                    <p>Try another title or check our full collection below</p>
                </div>
            `;
        }
    }
    
    // Handle search
    function handleSearch() {
        const searchTerm = bookTitleInput.value.trim();
        
        if (!searchTerm) {
            alert('Please enter a book title to search');
            return;
        }
        
        const foundBook = findBookByTitle(books, searchTerm);
        displaySearchResults(foundBook);
        
        // Clear input
        bookTitleInput.value = '';
    }
    
    // Event listeners
    searchButton.addEventListener('click', handleSearch);
    
    bookTitleInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    showAllButton.addEventListener('click', function() {
        bookResults.innerHTML = `
            <div class="initial-message">
                <i class="fas fa-book-open"></i>
                <p>Enter a book title to begin your search</p>
            </div>
        `;
    });
    
    // Initialize the page
    displayLibraryBooks();
});