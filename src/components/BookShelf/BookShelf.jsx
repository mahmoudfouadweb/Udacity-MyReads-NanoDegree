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
          {shelfTitle === shelfTitle
            ? isAllBooks.filter(item=> item.shelf === shelfTitle).map(book => {
                
                  const { id, title, imageLinks, authors, shelf } = book;
                  return (
                    <Card
                      key={id}
                      id={id}
                      thumbnail={imageLinks.smallThumbnail}
                      title={title}
                      author={authors}
                      shelf={shelf}
                      updateBookShelf={updateBookShelf}
                      book={book}
                    />
                  );
                
              })
            : null}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
