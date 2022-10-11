import React, { useEffect, useState } from 'react';
import { getAll, update } from '../../BooksAPI';
import Card from '../Card/Card';
// import classes from './bookShelf.module.scss';

const BookShelf = props => {
  const [isAllUpdatedBooks, setIsAllUpdatedBooks] = useState([]);
  // const [isUpdating, setIsUpdating] = useState(false);

  // Just try UNCOMMENT IT NESSECERY
  useEffect(() => {
    getAll().then(data => {
      const allBooks = [];
      for (const key in data) {
        const book = {
          id: data[key].id,
          title: data[key].title,
          thumbnail: data[key].imageLinks.thumbnail,
          authors: data[key].authors,
          shelf: data[key].shelf,
        };
        allBooks.push(book);
      }
      console.log(allBooks);
      setIsAllUpdatedBooks([...allBooks]);
      props.setIsUpdating(false);
    });
    console.log('*************************');
  }, [props.isUpdating]);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.title === 'currentlyReading'
            ? isAllUpdatedBooks
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
                    // setIsUpdating={setIsUpdating}
                    updateShelf={props.updateShelf}
                    isUpdatedBook={props.isUpdatedBook}
                  />
                ))
            : null}

          {props.title === 'wantToRead'
            ? isAllUpdatedBooks
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
                    // setIsUpdating={setIsUpdating}
                    updateShelf={props.updateShelf}
                    isUpdatedBook={props.isUpdatedBook}
                  />
                ))
            : null}

          {props.title === 'read'
            ? isAllUpdatedBooks
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
                    // setIsUpdating={setIsUpdating}
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
