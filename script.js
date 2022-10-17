// Global book array
let myLibrary = [];

const libraryDiv = document.getElementById("id");

let book = document.createElement("div");
console.log(libraryDiv, book);

book.classList.add("book");
book.innerText = "text";

document.getElementById("id").appendChild(book);

// form variable
let form = document.getElementById("form");
let addBtn = document.getElementById("add");

// LibraryDiv.classList.add(book);
// LibraryDiv.innerHTML("Hello");
// libraryDiv.appendChild(LibraryDiv);

function Book() {
  this.title = "No titile";
  this.author = "No author";
  this.pages = 0;
  this.haveRead = false;
}

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hi");
  addBookToLibrary();
  showLibrary();
  formShow();
});

function addBookToLibrary() {
  newBook = new Book(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("haveRead").value
  );
  //   newBook = new Book("lord", "of the rings", 23, false);
  console.log("newBook", newBook);
  myLibrary.push(newBook);
}

function showLibrary() {
  clearLibrary();
  for (book of myLibrary) {
    let card = document.createElement("div");
    card.classList.add("book");

    let title = document.createElement("h2");
    title.textContent = book.title;
    let author = document.createElement("p");
    author.textContent = book.author;
    let pages = document.createElement("p");
    pages.textContent = book.pages;

    let haveRead = document.createElement("input");
    haveRead.type = "checkbox";
    haveRead.classList.add("check");

    haveRead === "on" ? (book.haveRead = true) : (book.haveRead = false);

    console.log(haveRead, book.haveRead);

    //  appending to root div
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(haveRead);

    console.log(myLibrary);
    libraryDiv.appendChild(card);
  }
}
function clearLibrary() {
  libraryDiv.innerHTML = "";
}

function formShow() {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    form.classList.add("show");
    addBtn.textContent = "Close menu";
  } else {
    form.classList.add("hidden");
    form.classList.remove("show");
    addBtn.textContent = "Add a book";
  }
}
// button
