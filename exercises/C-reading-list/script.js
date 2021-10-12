//1. Create a function called readingList that takes in an array of books.
// 2. Create a new element called readingList.
// 3. Loop through the array of books.
// 4. Create a new element called bookItem.
// 5. Check if the book has been read.
// 6. If it has been read, add the class book-list-item__is-read to the bookItem.
// 7. If it hasn’t been read, add the class book-list-item__not-read to the bookItem.
// 8. Create a new element called bookInfo.
// 9. Create a new element called bookImage.
// 10. Set the src attribute of the bookImage to the book’s bookCoverImage.
// 11. Add the class book-image-cover to the bookImage.
// 12. Append the bookInfo and bookImage to the bookItem.
// 13. Append the bookItem to the readingList.
// 14. Append the readingList to the content element.

const content = document.querySelector('#content');

function readingList(books) {
  const readingList = document.createElement('ul');

  books.forEach((book) => {
    const bookItem = document.createElement('li');

    if (book.alreadyRead) bookItem.classList.add('book-list-item__is-read');
    else bookItem.classList.add('book-list-item__not-read');

    const bookInfo = document.createElement('p');
    const bookImage = document.createElement('img');

    const bookInfoText = `${book.title} by ${book.author}`;

    bookInfo.innerText = bookInfoText;
    bookImage.src = book.bookCoverImage;
    bookImage.classList.add('book-image-cover');

    bookItem.append(bookInfo, bookImage);
    readingList.appendChild(bookItem);
  });

  content.appendChild(readingList);
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);



