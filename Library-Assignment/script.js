let bookLibrary = [];

function Book(title, author, pages, read, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.index = index;
}

Book.prototype.printInfo = function(){
    let info = this.title + " by " + this.author + 
            ", " + pages + " pages, ";

    if(read) info += "read";
    else info += "not read yet.";

    return info;
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages,read, bookLibrary.length);

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

    let readButton = document.createElement("button");
    readButton.classList.add("read");

    readButton.addEventListener("click", function(e){
        toggleRead(book.index);
    });



    titleDiv.innerHTML = title;
    authorDiv.innerHTML = author;
    pagesDiv.innerHTML = pages + " Pages";
    if(read) readButton.innerHTML = "Read";
    else readButton.innerHTML = "Not Read"

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function(e){
        removeBook(book.index);
    });


    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readButton);
    bookDiv.appendChild(deleteButton);

    bookshelf.appendChild(bookDiv);

    
    
}

function removeBook(index){
    
    bookLibrary.splice(index, index+1);

    for(let i = index; i < bookLibrary.length; i++){
        bookLibrary[i].index--;
    }

    let bookshelf = document.getElementById("bookshelf");
    let book = document.getElementsByClassName("book")[index];
    
    bookshelf.removeChild(book);


}

function toggleRead(index){
    book = bookLibrary[index];

    let bookshelf = document.getElementById("bookshelf"); 
    let button = document.getElementsByClassName("book")[index].getElementsByClassName("read")[0];

    if(book.read){
        book.read = false;
        button.innerHTML = "Not Read";
    } 

    else {
        book.read = true;
        button.innerHTML = "Read";
    }
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
addBookToLibrary("Name of the Wind", "J.K. Rowling", 500, true);

