import React, { useEffect, useState } from 'react';
import classes from './shelfChanger.module.scss';

const ShelfChanger = ({
  book,
  updateBookShelf,
  searchBookHandel,
  isAllBooks,
}) => {
  const [isChange, setIsChange] = useState('');
  const onChangeHandler = target => {
    setIsChange(target);
  };

  useEffect(() => {
    if (isChange != '') updateBookShelf(book, isChange);
  }, [isChange]);

  useEffect(() => {
    if (book.shelf == false) {
      const currentBk = isAllBooks.filter(item => item.id === book.id);
      searchBookHandel(currentBk[0]);
      console.log(currentBk);
    }
  }, []);

  console.log(isChange);
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={book.shelf ? book.shelf : 'none'}
        onChange={e => onChangeHandler(e.target.value)}
      >
        <option value="disable" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
