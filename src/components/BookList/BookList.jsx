import React, { useState } from 'react';
import BookShelf from '../BookShelf/BookShelf';

const BookList = props => {
  console.log(props.handlers);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            setIsChange={props.setIsChange}
            isChange={props.isChange}
            book={props.isCurrentlyReading}
            title={'Currently Reading'}
          />
          <BookShelf
            setIsChange={props.setIsChange}
            isChange={props.isChange}
            book={props.isWantToRead}
            title={'Want to Read'}
          />
          <BookShelf
            setIsChange={props.setIsChange}
            isChange={props.isChange}
            book={props.isRead}
            title={'Read'}
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
