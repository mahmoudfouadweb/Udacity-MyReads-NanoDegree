import React, { useEffect, useState } from 'react';
import { get, getAll, update } from '../../BooksAPI';
import classes from './shelfChanger.module.scss';

const ShelfChanger = props => {
  const [isBook, setIsBook] = useState({});
  const [isChange, setIsChange] = useState('');

  useEffect(() => {
    if (isChange) {
      if (isBook) {
        update(isBook, isChange);
        props.updateShelf(isBook, isChange);
        props.setIsUpdating(true);
        console.log('done ✔');
        console.log('isBook INSIDE', isBook);
      } else return;
    }
  }, [isBook]);

  console.log('isChange after useEffect Shelf Changer', isChange);
  console.log('isBook OUTSIDE', isBook);

  return (
    <div className="book-shelf-changer">
      <select
        onClick={e => {
          setIsBook({ ...props.currentBook, shelf: isChange });
          setIsChange(e.target.value);
        }}
      >
        <option value="disable" defaultValue disabled>
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
