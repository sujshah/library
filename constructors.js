let myLibrary = [];
let boardNumber = 0

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        const isReadString = this.read ? "read": "not read yet"
        return `${this.title} by ${this.author}, ${this.pages} pages, ${isReadString}`
    }
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length] = book;
    generateLibraryGridForBoardNum(boardNumber);
}


function generateLibraryGridForBoardNum(gridNum) {
    let libraryGrid = document.querySelector(".library-grid");
    libraryGrid.textContent = '';
    for (let i = 0; i < 9; i++) {
        let n = i + gridNum * 9;
        if (n < myLibrary.length) {
            const book = myLibrary[n];
            let div = document.createElement('div');
            div.classList.add('book');
            div.setAttribute("data-key", n.toString());
            div.textContent = book.info();
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("type", "submit");
            deleteButton.classList.add('delete');
            let readButton = document.createElement('button');
            readButton.textContent = "Read?";
            readButton.setAttribute("type", "submit");
            readButton.classList.add('read');
            div.appendChild(deleteButton);
            div.appendChild(readButton);
            libraryGrid.appendChild(div);
        }
    }
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
    if (event.target.classList.contains("delete")) {
        const bookElement = event.target.parentNode;
        const key = bookElement.getAttribute("data-key");
        myLibrary.splice(key, 1);

        generateLibraryGridForBoardNum(boardNumber);
    }
}

function toggleReadStatus(event) {
    if (event.target.classList.contains("read")) {
        const bookElement = event.target.parentNode;
        const key = parseInt(bookElement.getAttribute("data-key"));
        let book = myLibrary[key];
        book.read = !(book.read);
        myLibrary[key] = book;
        bookElement.firstChild.nodeValue = book.info();

    }
}

function listenDynamicEvents() {
    document.body.addEventListener("click", deleteBookFromLibrary);
    document.body.addEventListener("click", toggleReadStatus);
}

function submitBook(event) {
    event.preventDefault();
    const form = event.target.elements;
    const book = new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.read.checked,
    )
    addBookToLibrary(book);

}

function moveLeft() {
    if (boardNumber > 0) {
        boardNumber--;
        generateLibraryGridForBoardNum(boardNumber);
    }
}

function moveRight() {
    const numBooks = myLibrary.length;
    if (boardNumber < Math.floor( (numBooks - 1) / 9)) {
        boardNumber++;
        generateLibraryGridForBoardNum(boardNumber);
    }
}


listenNewBookSubmit();
listenDynamicEvents();