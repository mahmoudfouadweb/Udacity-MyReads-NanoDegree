import React, { useEffect, useState } from 'react';
import classes from './shelfChanger.module.scss';

const ShelfChanger = ({
  updateShelf,
  currentBook,
  isAllUpdatedBooks,
  setIsAllUpdatedBooks,
}) => {
  const [isBook, setIsBook] = useState({});
  const [isChange, setIsChange] = useState('');

  useEffect(() => {
    console.log('currentBook INSIDE useEffect', currentBook.shelf);
    if (isBook.id) {
      console.log('done ✔', isChange);
      console.log('isBook INSIDE', isBook);

      updateShelf(isBook, isChange);
      // setIsAllUpdatedBooks([...filtered, { ...isBook, shelf: isChange }]);
    } else return;
  }, [isChange]);

  const clickHandler = e => {
    console.log('CLICKED');
    console.log(e);
    setIsChange(e.target.value);
    setIsBook(currentBook);
  };

  console.log('isChange after useEffect Shelf Changer', isChange);
  console.log('isBook OUTSIDE', isBook);

  return (
    <div className="book-shelf-changer">
      <select
        onChange={e => {
          e.stopPropagation();
          clickHandler(e);
        }}
        defaultValue={currentBook.shelf ? currentBook.shelf : 'none'}
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
