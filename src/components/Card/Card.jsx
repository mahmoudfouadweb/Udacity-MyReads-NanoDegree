import React from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = props => {
  console.log('Card', props.onChange);

  console.log(props.book);

  const render = props.book.map(item => (
    <li key={item.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${item.imageLinks.thumbnail})`,
            }}
          ></div>
          <ShelfChanger onChange={props.onChange} />
        </div>
        <div className="book-title">{item.title}</div>
        <div className="book-authors">{item.authors}</div>
      </div>
    </li>
  ));
  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
