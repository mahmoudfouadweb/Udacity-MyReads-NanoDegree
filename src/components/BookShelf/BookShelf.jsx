import React, { useEffect, useState } from 'react';
import { update } from '../../BooksAPI';
import Card from '../Card/Card';
// import classes from './bookShelf.module.scss';

const BookShelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.title === 'currentlyReading'
            ? props.isAllBooks
                .filter(item => item.shelf === 'currentlyReading')
                .map((item, i) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    i={i + '0'}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    authors={item.authors}
                    shelf={item.shelf}
                    setIsUpdating={props.setIsUpdating}
                    updateShelf={props.updateShelf}
                    isUpdatedBook={props.isUpdatedBook}
                  />
                ))
            : null}

          {props.title === 'wantToRead'
            ? props.isAllBooks
                .filter(item => item.shelf === 'wantToRead')
                .map((item, i) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    i={i + '1'}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    authors={item.authors}
                    shelf={item.shelf}
                    setIsUpdating={props.setIsUpdating}
                    updateShelf={props.updateShelf}
                    isUpdatedBook={props.isUpdatedBook}
                  />
                ))
            : null}

          {props.title === 'read'
            ? props.isAllBooks
                .filter(item => item.shelf === 'read')
                .map((item, i) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    i={i + '2'}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    authors={item.authors}
                    shelf={item.shelf}
                    setIsUpdating={props.setIsUpdating}
                    updateShelf={props.updateShelf}
                    isUpdatedBook={props.isUpdatedBook}
                  />
                ))
            : null}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
