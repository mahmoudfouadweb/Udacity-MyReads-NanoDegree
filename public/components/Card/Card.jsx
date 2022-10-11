import React, { useEffect, useState } from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = ({
  item,
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
    <li key={item.id} id={item.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${item.thumbnail})`,
            }}
          ></div>
          <ShelfChanger
            key={item.id}
            updateShelf={updateShelf}
            currentBook={item}
            isUpdatedBook={isUpdatedBook}
            isAllUpdatedBooks={isAllUpdatedBooks}
            setIsAllUpdatedBooks={setIsAllUpdatedBooks}
          />
        </div>
        <div className="book-title">{item.title}</div>
        <div className="book-authors">{item.authors}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
