import React from 'react';
import BookShelf from '../BookShelf/BookShelf';

const BookList = ({ isAllBooks, toggleShowSearchButton, updateBookShelf }) => {
  // SHELFS TYPES
  const shelfs = ['currentlyReading', 'wantToRead', 'read'];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {shelfs.map(shelf => (
            <BookShelf
              key={shelf}
              shelfTitle={shelf}
              isAllBooks={isAllBooks}
              updateBookShelf={updateBookShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <a href="#" onClick={() => toggleShowSearchButton(!false)}>
          Add a book
        </a>
      </div>
    </div>
  );
};

export default BookList;
