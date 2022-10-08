import React, { useEffect, useState } from 'react';
import classes from './shelfChanger.module.scss';

const ShelfChanger = props => {
  const [isChange, setIsChange] = useState('none');

  useEffect(() => {
    props.onChange(isChange);
  }, [isChange]);
  
  
  
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
