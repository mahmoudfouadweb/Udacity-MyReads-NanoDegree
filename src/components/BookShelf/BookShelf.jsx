import React, { useEffect, useState } from 'react';
import { getAll, update } from '../../BooksAPI';
import Card from '../Card/Card';
// import classes from './bookShelf.module.scss';

const BookShelf = props => {
  const [isAllUpdatedBooks, setIsAllUpdatedBooks] = useState([]);
  

  // Just try UNCOMMENT IT NESSECERY
  // useEffect(() => {
  //   getAll().then(data => {
  //     const allBooks = [];
  //     for (const key in data) {
  //       const book = {
  //         id: data[key].id,
  //         title: data[key].title,
  //         thumbnail: data[key].imageLinks.thumbnail,
  //         authors: data[key].authors,
  //         shelf: data[key].shelf,
  //       };
  //       allBooks.push(book);
  //     }
  //     setIsAllUpdatedBooks([...allBooks]);
  //     // console.log(allBooks);
  //     // props.setIsUpdating(false);
  //   });
  //   console.log(isAllUpdatedBooks);
  //   console.log('*************************');
  //   // the [...] is will removed after my logic and set when open search page
  // }, []);


  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
