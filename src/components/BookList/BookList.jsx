import React, { useState } from 'react';
import BookShelf from '../BookShelf/BookShelf';

const BookList = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            key={'Currently Reading'}
            title={'Currently Reading'}
            book={props.isCurrentlyReading}
            isCurrentlyReading={props.isCurrentlyReading}
            isWantToRead={props.isWantToRead}
            isRead={props.isRead}
            setIsCurrentlyReading={props.setIsCurrentlyReading}
            setIsWantToRead={props.setIsWantToRead}
            setIsRead={props.setIsRead}
            // setIsAllBooks={props.setIsAllBooks}
            // isAllBooks={props.isAllBooks}
          />
          <BookShelf
            key={'Want to Read'}
            title={'Want to Read'}
            book={props.isWantToRead}
            isCurrentlyReading={props.isCurrentlyReading}
            isWantToRead={props.isWantToRead}
            isRead={props.isRead}
            setIsCurrentlyReading={props.setIsCurrentlyReading}
            setIsWantToRead={props.setIsWantToRead}
            setIsRead={props.setIsRead}
            // setIsAllBooks={props.setIsAllBooks}
            // isAllBooks={props.isAllBooks}
          />
          <BookShelf
            key={'Read'}
            title={'Read'}
            book={props.isRead}
            isCurrentlyReading={props.isCurrentlyReading}
            isWantToRead={props.isWantToRead}
            isRead={props.isRead}
            setIsCurrentlyReading={props.setIsCurrentlyReading}
            setIsWantToRead={props.setIsWantToRead}
            setIsRead={props.setIsRead}
            // setIsAllBooks={props.setIsAllBooks}
            // isAllBooks={props.isAllBooks}
          />
        </div>
      </div>
      <div className="open-search">
        <a href="#" onClick={() => props.toggleShowSearchButton(!false)}>
          Add a book
        </a>
      </div>
    </div>
  );
};

export default BookList;
