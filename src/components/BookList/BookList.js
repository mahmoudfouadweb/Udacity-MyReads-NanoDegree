import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf/BookShelf';

const BookList = ({ isAllBooks, updateBookShelf }) => {
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
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BookList;
