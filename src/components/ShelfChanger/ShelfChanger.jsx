import React, { useEffect } from 'react';
import { update } from '../../BooksAPI';
import classes from './shelfChanger.module.scss';

const ShelfChanger = props => {
  useEffect(() => {
    if (props.isChange) update(props.book, props.isChange);
  }, [props.isChange]);

  return (
    <div className="book-shelf-changer">
      <select onClick={e => props.setIsChange(e.target.value)}>
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
