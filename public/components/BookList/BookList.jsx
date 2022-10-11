import React, { useEffect, useState } from 'react';
import { getAll, update } from '../../BooksAPI';
import BookShelf from '../BookShelf/BookShelf';

const BookList = props => {
  // const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdatedBook, setIsUpdatedBook] = useState([]);

  useEffect(() => {
    if (!isUpdatedBook.id) return;
    update(isUpdatedBook, isUpdatedBook.shelf);
    // setIsUpdating(true);
  }, []);

  console.log('===========================================');
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf title={'currentlyReading'} />
          <BookShelf title={'wantToRead'} />
          <BookShelf title={'read'} />
        </div>
      </div>
      <div className="open-search">
        <a href="#" onClick={() => props.toggleShowSearchButton(!false)}>
          Add a book
        </a>
      </div>
    </div>
  );
};

export default BookList;
