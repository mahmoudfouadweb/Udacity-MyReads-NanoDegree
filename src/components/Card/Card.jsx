import React, { useState } from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = props => {
  const [isChange, setIsChange] = useState('');

  const bookChangeHandler = isChange => {
    const newEntry = {
      
    }
    console.log('THE MAIN FUNCTION');
    if (isChange === 'none') {
      console.log('none');
    } else if (isChange === 'currentlyReading') {
      console.log('Currently Reading');
    } else if (isChange === 'wantToRead') {
      console.log('Want to Read');
    } else if (isChange === 'read') {
      console.log('Read');
    }
  };
  console.log(isChange);
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
          <ShelfChanger onIsChange={setIsChange} onChange={bookChangeHandler} />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
