import React, { useEffect, useState } from 'react';
import { get, getAll, update } from '../../BooksAPI';
import classes from './shelfChanger.module.scss';

const ShelfChanger = props => {
  const [isBook, setIsBook] = useState({});
  const [isChange, setIsChange] = useState('');

  useEffect(() => {
    console.log('currentBook INSIDE useEffect', props.currentBook.shelf);
    if (isChange != props.currentBook.shelf && isBook) {
      console.log(isBook);
      props.updateShelf(isBook, isChange);
      // update(isBook, isChange);
      props.setIsUpdating(true);
      console.log('done ✔', isChange);
      console.log('isBook INSIDE', isBook);
    } else return;
  }, [isChange]);

  const clickHandler = e => {
    console.log('CLICKED');
    console.log(e);
    setIsChange(e.target.value);
    setIsBook(props.currentBook);
  };

  console.log('isChange after useEffect Shelf Changer', isChange);
  console.log('isBook OUTSIDE', isBook);

  return (
    <div className="book-shelf-changer">
      <select onClick={e => clickHandler(e)}>
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
