import React, { useEffect, useState } from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = ({
  book,
  setIsAllUpdatedBooks,
  isAllUpdatedBooks,
  updateShelf,
  isUpdatedBook,
  
}) => {
  // const [isSelectedBook, setIsSelectedBook] = useState([]);
  // props.isAllUpdatedBooks.map(book => {
  //   if (book.id === props.id) setIsSelectedBook([book]);
  //   return book;
  // });
  // console.log(isSelectedBook);

  const render = (
    <li key={book.id} id={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.thumbnail})`,
            }}
          ></div>
          <ShelfChanger
            key={book.id}
            updateShelf={updateShelf}
            currentBook={book}
            isUpdatedBook={isUpdatedBook}
            isAllUpdatedBooks={isAllUpdatedBooks}
            setIsAllUpdatedBooks={setIsAllUpdatedBooks}
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
