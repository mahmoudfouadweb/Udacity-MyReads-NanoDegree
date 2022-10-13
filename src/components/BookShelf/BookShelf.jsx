import React, { useEffect, useState } from 'react';
import { getAll, update } from '../../BooksAPI';
import Card from '../Card/Card';
// import classes from './bookShelf.module.scss';

const BookShelf = ({
  shelfTitle,
  isAllBooks,
  setIsAllBooks,
  updateBookShelf,
}) => {
  const [isAllUpdatedBooks, setIsAllUpdatedBooks] = useState([]);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {isAllBooks
            .filter(item => item.shelf === shelfTitle)
            .map(book => (
              <Card
                key={book.id}
                updateBookShelf={updateBookShelf}
                book={book}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
