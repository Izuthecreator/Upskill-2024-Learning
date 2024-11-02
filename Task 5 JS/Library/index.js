let Library = [];

// THIS IS THE FUNCTION TO ADD A BOOK
function addBook(bookTitle, bookAuthor, bookYear) {
    const book = {
        title: bookTitle,
        author: bookAuthor,
        year: bookYear
    }

    Library.push(book)
    console.log(`${bookTitle} has been added to the library`);
};

// THIS IS THE FUNCTION TO VIEW THE BOOKS IN THE LIBRARY
function viewLibrary() {
    for (let book of Library) {
        console.log(`Title: ${book.title}, Author: ${book.author}, Year of Publishing: ${book.year}`)
    }
}


// THIS IS THE FUNCTION TO DELETE A BOOK IN THE LIBRARY
function deleteBook(bookTitle) {
    const index = Library.findIndex(book => book.title === bookTitle);

    if (index !== -1) {
        Library.splice(index, 1);
        console.log(`${bookTitle} has been removed from the library.`);
    } else {
        console.log(`Book titled "${bookTitle}" was not found in the library.`);
    }
}



addBook("To Kill a Mockingbird", "Harper Lee", "1960");
addBook("Thinking, Fast and Slow", "Daniel Kahneman ", "2011");
addBook("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", "2011");
addBook("Educated", "Tara Westover", "2018");
addBook("The Catcher in the Rye", "J.D. Salinger", "1951");
addBook("Pride and Prejudice", "Jane Austen", "1813");


viewLibrary();

deleteBook("Pride and Prejudice");

