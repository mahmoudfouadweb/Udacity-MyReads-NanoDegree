import React, { useEffect, useState } from 'react';
import { update } from '../../BooksAPI';
import Card from '../Card/Card';
// import classes from './bookShelf.module.scss';

const BookShelf = props => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdated, setIsUpdated] = useState([]);
  
  const changeShelfHandler = () => {
    
    
  }
  // props.isAllBooks.map(item => console.log(item));
  // const book = {
  //   id: props.id,
  //   title: props.title,
  //   thumbnail: props.thumbnail,
  //   authors: props.authors,
  //   shelf: props.shelf,
  // };
  // // console.log(book);

  // const changeHandler = isChange => {
  //   if (props.isChange) setIsUpdating(true);
  // };



  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.title === 'currentlyReading'
            ? props.isAllBooks
                .filter(item => item.shelf === 'currentlyReading')
                .map(item => (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    authors={item.authors}
                    shelf={item.shelf}
                    setIsChange={props.setIsChange}
                  />
                ))
            : null}

          {props.title === 'wantToRead'
            ? props.isAllBooks
                .filter(item => item.shelf === 'wantToRead')
                .map(item => (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    authors={item.authors}
                    shelf={item.shelf}
                    setIsChange={props.setIsChange}
                  />
                ))
            : null}

          {props.title === 'read'
            ? props.isAllBooks
                .filter(item => item.shelf === 'read')
                .map(item => (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    authors={item.authors}
                    shelf={item.shelf}
                    setIsChange={props.setIsChange}
                  />
                ))
            : null}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
