import React from 'react';
import Card from '../Card/Card';

const BookShelf = ({ shelfTitle, isAllBooks, updateBookShelf }) => {
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
