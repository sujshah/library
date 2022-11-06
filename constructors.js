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

function addBookToLibrary(book) {
    myLibrary.push(book);
    let libraryGrid = document.querySelector(".library-grid");
    let div = document.createElement('div');
    div.classList.add('book');
    div.textContent = book.info();
    libraryGrid.appendChild(div);
}

function addNewBookForm() {
    const form = document.querySelector(".form-items");
    form.style.visibility = "visible";
}


function listenNewBookSubmit() {
    const submitButton = document.querySelector(".form-items");
    submitButton.addEventListener("submit", submitBook);
}

function submitBook(event) {
    event.preventDefault();
    const form = event.target.elements;
    console.log(form.title.value);
    const book = new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.read.value,
    )
    addBookToLibrary(book);

}

listenNewBookSubmit();
