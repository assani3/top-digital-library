class Book {
  constructor(id, title, author, pages) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.nextId = 1;
  }

  addBook(title, author, pages) {
    const book = new Book(this.nextId, title, author, pages);
    this.nextId += 1;
    this.books.push(book);
    return book;
  }

  findBook(id) {
    return this.books.find((book) => book.id === id);
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}

const library = new Library();
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const bookForm = document.getElementById('bookForm');
const booksContainer = document.querySelector('.books-container');

function displayBooks() {
  booksContainer.replaceChildren();

  library.books.forEach((book) => {
    const bookBox = document.createElement('div');
    bookBox.className = 'book-box';
    bookBox.dataset.bookId = book.id;

    const title = document.createElement('h2');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'btn-container';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-btn';
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-btn';
    toggleButton.type = 'button';
    toggleButton.textContent = book.isRead ? 'Read' : 'Unread';
    toggleButton.setAttribute('aria-pressed', String(book.isRead));

    buttonContainer.append(removeButton, toggleButton);
    bookBox.append(title, author, pages, buttonContainer);
    booksContainer.append(bookBox);
  });
}

openBtn.addEventListener('click', () => {
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

booksContainer.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const button = event.target.closest('button');
  const bookBox = button?.closest('.book-box');
  if (!button || !bookBox) {
    return;
  }

  const bookId = Number(bookBox.dataset.bookId);

  if (button.classList.contains('remove-btn')) {
    library.removeBook(bookId);
    displayBooks();
    return;
  }

  if (button.classList.contains('toggle-btn')) {
    const book = library.findBook(bookId);
    if (book) {
      book.toggleRead();
      displayBooks();
    }
  }
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = bookForm.elements.title.value.trim();
  const author = bookForm.elements.author.value.trim();
  const pages = Number(bookForm.elements.pages.value);

  if (!title || !author || !Number.isInteger(pages) || pages < 1) {
    return;
  }

  library.addBook(title, author, pages);
  displayBooks();
  modal.close();
  bookForm.reset();
});
