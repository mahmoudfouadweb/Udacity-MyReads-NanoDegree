import React, { useEffect, useState } from 'react';
import { get, getAll, update } from '../../BooksAPI';
import classes from './shelfChanger.module.scss';

const ShelfChanger = props => {
  const [isBook, setIsBook] = useState([]);
  const [isChange, setIsChange] = useState('');

  // useEffect(() => {
  //   if (isChange) props.updateShelf(props.currentBook, isChange);
  // }, []);
  //
  // useEffect(() => {
  //   getAll().then(data => {
  //     const filtered = data
  //       .filter(book => book.id === props.book)
  //       .mab(book => book);
  //     setIsBook([filtered]);
  //   });
  // const book = {
  //   id: data[key].id,
  //   title: data[key].title,
  //   thumbnail: data[key].imageLinks.thumbnail,
  //   authors: data[key].authors,
  //   shelf: data[key].shelf,
  // };
  // }, []);

  useEffect(() => {
    if (isChange) {
      setIsBook(props.currentBook);
      props.updateShelf(isBook, isChange);
      update(isBook, isChange);
    } else return;

    // props.setIsUpdating(true);
  }, [isChange]);

  console.log(isChange);
  // console.log(isBook);
  return (
    <div className="book-shelf-changer">
      <select onClick={e => setIsChange(e.target.value)}>
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
