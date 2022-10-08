import React from 'react';
import classes from './shelfChanger.module.scss';

const ShelfChanger = props => {
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
