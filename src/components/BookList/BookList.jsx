import React, { useEffect, useState } from 'react';
import { getAll, update } from '../../BooksAPI';
import BookShelf from '../BookShelf/BookShelf';

const BookList = props => {
  // const [isAllBooks, setIsAllBooks] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdatedBook, setIsUpdatedBook] = useState({});

  const updateShelf = (book, isChange) => {
    console.log('updateShelf book ', book);
    const updatedBook = {
      id: book.id,
      shelf: isChange,
      title: book.title,
      authors: book.authors,
      thumbnail: book.thumbnail,
    };
    console.log(updatedBook, 'updatedBook (){}');
    if (updatedBook.id) setIsUpdatedBook(updatedBook);
  };

  useEffect(() => {
    if (!isUpdatedBook.id) return;
    update(isUpdatedBook, isUpdatedBook.shelf);
    setIsUpdating(true);
  }, [isUpdatedBook]);

  console.log('===========================================');
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            title={'currentlyReading'}
            setIsUpdating={setIsUpdating}
            isUpdating={isUpdating}
            updateShelf={updateShelf}
          />
          <BookShelf
            title={'wantToRead'}
            setIsUpdating={setIsUpdating}
            isUpdating={isUpdating}
            updateShelf={updateShelf}
          />
          <BookShelf
            title={'read'}
            setIsUpdating={setIsUpdating}
            isUpdating={isUpdating}
            updateShelf={updateShelf}
          />
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
