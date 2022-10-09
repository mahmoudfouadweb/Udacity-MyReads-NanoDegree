import React, { useEffect, useState } from 'react';
import { getAll } from '../../BooksAPI';
import BookShelf from '../BookShelf/BookShelf';

const BookList = props => {
  const [isAllBooks, setIsAllBooks] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
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
    setIsUpdating(false);
    console.log('getAll ', isUpdating);
  }, [isUpdating]);
  console.log('after getAll ', isUpdating);

  const updateShelf = (book, isChange) => {
    console.log('updateShelf book ', book);

    const updatedBook = {
      id: book.id,
      shelf: book.shelf,
      title: book.title,
      authors: book.authors,
      thumbnail: book.shelf,
    };
    const filtered = isAllBooks.filter(item => item.id != book.id);
    setIsAllBooks([...filtered, updatedBook]);
  };
  console.log(isAllBooks);
  console.log('===========================================');
  // console.log(isAllBooks);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            title={'currentlyReading'}
            isAllBooks={isAllBooks}
            setIsUpdating={setIsUpdating}
            updateShelf={updateShelf}
          />
          <BookShelf
            title={'wantToRead'}
            isAllBooks={isAllBooks}
            setIsUpdating={setIsUpdating}
            updateShelf={updateShelf}
          />
          <BookShelf
            title={'read'}
            isAllBooks={isAllBooks}
            setIsUpdating={setIsUpdating}
            updateShelf={updateShelf}
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
