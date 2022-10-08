import React, { useEffect, useState } from 'react';
import { update } from '../../BooksAPI';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = props => {
  const [isChange, setIsChange] = useState('');
  const [isAllBooks, setIsAllBooks] = useState([]);

  useEffect(() => {
    const book = {
      id: props.id,
    };
    if (isChange) update(book, isChange);
  });

  const render = (
    <li key={props.id} id={props.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.thumbnail})`,
            }}
          ></div>
          <ShelfChanger setIsChange={setIsChange} />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
