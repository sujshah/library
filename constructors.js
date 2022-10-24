let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        const isReadString = read ? "read": "not read yet"
        return `${title} by ${author}, ${pages} pages, ${isReadString}`
    }
}

function addBookToLibrary() {
    let book = new Book("The Hobbit", "Tolkien", 245, true);
    myLibrary.push(book);
    book = new Book("The Hobbit 2", "Tolkien", 245, true);
    myLibrary.push(book);
    book = new Book("The Hobbit 2", "Tolkien", 245, true);
    myLibrary.push(book);
    book = new Book("The Hobbit 2", "Tolkien", 245, true);
    myLibrary.push(book);
    book = new Book("The Hobbit 2", "Tolkien", 245, true);
    myLibrary.push(book);
    book = new Book("The Hobbit 2", "Tolkien", 245, true);
    myLibrary.push(book);
    book = new Book("The Hobbit 2", "Tolkien", 245, true);
    myLibrary.push(book);
    book = new Book("The Hobbit 2", "Tolkien", 245, true);
    myLibrary.push(book);
    let libraryGrid = document.querySelector(".library-grid");
    for (const libraryBook of myLibrary) {
        let div = document.createElement('div');
        div.classList.add('book');
        div.textContent = libraryBook.info();
        libraryGrid.appendChild(div);
    }
}


addBookToLibrary();
// console.log(myLibrary);
