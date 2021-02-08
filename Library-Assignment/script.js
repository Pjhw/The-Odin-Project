let bookLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.printInfo = function(){
    let info = this.title + " by " + this.author + 
            ", " + pages + " pages, ";

    if(read) info += "read";
    else info += "not read yet.";

    return info;
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages,read);

    bookLibrary.push(book);

    let bookshelf = document.getElementById("bookshelf");

    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");

    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");

    let pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pages");

    let readDiv = document.createElement("div");
    readDiv.classList.add("read");

    titleDiv.innerHTML = title;
    authorDiv.innerHTML = author;
    pagesDiv.innerHTML = pages;
    if(read) readDiv.innerHTML = "Read";
    else readDiv.innerHTML = "Not Read"

    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);

    bookshelf.appendChild(bookDiv);


}

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e){
    let bookTitle = document.getElementById("book-title");
    let bookAuthor = document. getElementById("book-author");
    let bookPages = document.getElementById("book-pages");
    let bookRead = document.getElementById("book-read").checked;

    if(bookTitle.value === "") return;
    if(bookAuthor.value === "") return;
    if(bookPages.value === "") return;

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead);

    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
});

addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);
addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);

