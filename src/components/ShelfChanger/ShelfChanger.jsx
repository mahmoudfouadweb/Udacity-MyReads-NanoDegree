import React, { useEffect, useState } from 'react';

const ShelfChanger = ({ book, updateBookShelf }) => {
  // CHANGED SHELF STATUS
  const [isChange, setIsChange] = useState('');

  // WHEN USER CLICKED A BOOK'S SHELF TYPE
  const onChangeHandler = target => {
    setIsChange(target);
  };

  // UPDATE BOOK'S SHELF TYPE
  useEffect(() => {
    if (isChange != '') updateBookShelf(book, isChange);
  }, [isChange]);

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
