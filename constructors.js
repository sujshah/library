let myLibrary = {};
let count = 0

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

function addBookToLibrary(book) {
    myLibrary[count] = book;
    let libraryGrid = document.querySelector(".library-grid");
    let div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute("data-key", count.toString());
    div.textContent = book.info();
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("type", "submit");
    deleteButton.classList.add('delete');
    div.appendChild(deleteButton);
    libraryGrid.appendChild(div);
    count++;
}

function addNewBookForm() {
    const form = document.querySelector(".form-items");
    form.style.visibility = "visible";
}


function listenNewBookSubmit() {
    const submitButton = document.querySelector(".form-items");
    submitButton.addEventListener("submit", submitBook);
}

function deleteBookFromLibrary(event) {
    console.log("reached");
    if (event.target.classList.contains("delete")) {
        const bookElement = event.target.parentNode;
        const key = bookElement.getAttribute("data-key");
        delete myLibrary[key];
        bookElement.remove();
    }
}

function listenDeleteBook() {
    document.body.addEventListener("click", deleteBookFromLibrary);
}

function submitBook(event) {
    event.preventDefault();
    const form = event.target.elements;
    const book = new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.read.value,
    )
    addBookToLibrary(book);

}

listenNewBookSubmit();
listenDeleteBook();