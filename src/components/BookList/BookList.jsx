import React, { useEffect, useState } from 'react';
import { getAll, update } from '../../BooksAPI';
import BookShelf from '../BookShelf/BookShelf';
import PropType from 'prop-types';

const BookList = ({
  isAllBooks,
  toggleShowSearchButton,
  setIsAllBooks,
  updateBookShelf,
}) => {
  console.log('===========================================');
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            shelfTitle={'currentlyReading'}
            isAllBooks={isAllBooks}
            setIsAllBooks={setIsAllBooks}
            updateBookShelf={updateBookShelf}
          />
          <BookShelf
            shelfTitle={'wantToRead'}
            isAllBooks={isAllBooks}
            setIsAllBooks={setIsAllBooks}
            updateBookShelf={updateBookShelf}
          />
          <BookShelf
            shelfTitle={'read'}
            isAllBooks={isAllBooks}
            setIsAllBooks={setIsAllBooks}
            updateBookShelf={updateBookShelf}
          />
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
BookList.prototype = {
  isAllBooks: PropType.array.isRequired,
  onUpdate: PropType.func.isRequired,
};

export default BookList;
