import React, { useEffect, useState } from 'react';
import { getAll } from '../../BooksAPI';
import BookShelf from '../BookShelf/BookShelf';

const BookList = props => {
  const [isAllBooks, setIsAllBooks] = useState([]);
  const [isChange, setIsChange] = useState('');

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
      setIsAllBooks([...allBooks]);
    });
  }, [isChange]);

  console.log(isAllBooks);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            key={'currentlyReading'}
            title={'currentlyReading'}
            setIsChange={setIsChange}
            isAllBooks={isAllBooks}
          />
          <BookShelf
            key={'wantToRead'}
            title={'wantToRead'}
            isChange={isChange}
            setIsChange={setIsChange}
            isAllBooks={isAllBooks}
          />
          <BookShelf
            key={'read'}
            title={'read'}
            setIsChange={setIsChange}
            isAllBooks={isAllBooks}
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
