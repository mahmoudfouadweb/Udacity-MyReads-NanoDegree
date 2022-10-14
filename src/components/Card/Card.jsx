import React from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';

const Card = ({ updateBookShelf, book }) => {
  const render = (
    <li id={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${book?.imageLinks?.smallThumbnail})`,
            }}
          ></div>
          <ShelfChanger
            key={book.id}
            updateBookShelf={updateBookShelf}
            book={book}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
