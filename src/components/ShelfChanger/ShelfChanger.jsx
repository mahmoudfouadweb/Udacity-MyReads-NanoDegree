import React, { useState } from 'react';
import classes from './shelfChanger.module.scss';

const ShelfChanger = () => {
  const [isChange, setIsChange] = useState('none');

  const changeStatusHandler = e => {
    
    const current = e.target.value;
    setIsChange(current);
  };
  console.log(isChange);
  return (
    <div className="book-shelf-changer">
      <select onClick={e => changeStatusHandler(e)}>
        <option value="none" selected disabled>
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
