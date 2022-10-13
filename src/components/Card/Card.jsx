import React from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = () => {
  const render = (
    <li key={'a'} id={'a'}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${'a'})`,
            }}
          ></div>
          <ShelfChanger key={'a'} />
        </div>
        <div className="book-title">{'a'}</div>
        <div className="book-authors">{'a'}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
