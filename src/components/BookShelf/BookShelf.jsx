import React from 'react';
import Card from '../Card/Card';
import classes from './bookShelf.module.scss';

const BookShelf = props => {
  console.log('BookShelf', props.onChange);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          props.book.map(item => (
          <Card  onChange={props.onChange} />
          ));
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
