const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const bookForm = document.getElementById('bookForm');
const booksContainer = document.querySelector('.books-container');

openBtn.addEventListener('click', () => {
  modal.showModal();
});

closeBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});

booksContainer.addEventListener('click', (event) => {
  const removeBtn = event.target.closest('.remove-btn');
  if (removeBtn) {
    const bookBox = removeBtn.closest('.book-box');
    if (bookBox) {
      bookBox.remove();
    }
    return;
  }

  const toggleBtn = event.target.closest('.toggle-btn');
  if (toggleBtn) {
    toggleBtn.textContent = 'Read ✓';
    toggleBtn.disabled = true;
    return;
  }
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = bookForm.elements.title.value.trim();
  const author = bookForm.elements.author.value.trim();
  const pages = bookForm.elements.pages.value.trim();

  if (!title || !author || !pages) {
    return;
  }

  const bookBox = document.createElement('div');
  bookBox.className = 'book-box';
  bookBox.innerHTML = `
    <h2>${title}</h2>
    <p>${author}</p>
    <p>${pages}</p>
    <div class="btn-container">
      <button class="remove-btn" type="button">Remove</button>
      <button class="toggle-btn" type="button">Read</button>
    </div>
  `;

  booksContainer.appendChild(bookBox);
  modal.close();
  bookForm.reset();
});
