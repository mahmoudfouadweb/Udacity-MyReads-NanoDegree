import React from 'react';
import Card from '../Card/Card';
import classes from './bookShelf.module.scss';

const BookShelf = props => {
  // const allBookHandler = book => {
  //   props.setIsAllBooks([...props.isAllBooks, ...book]);
  // };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.book.map(item => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              thumbnail={item?.thumbnail}
              authors={item.authors}
              handlers={props.handlers}
              isCurrentlyReading={props.isCurrentlyReading}
              isWantToRead={props.isWantToRead}
              isRead={props.isRead}
              setIsCurrentlyReading={props.setIsCurrentlyReading}
              setIsWantToRead={props.setIsWantToRead}
              setIsRead={props.setIsRead}
              // allBookHandler={allBookHandler}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
