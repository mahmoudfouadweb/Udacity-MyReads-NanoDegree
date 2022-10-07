import React from 'react';
import classes from './bookhhelftitle.module.scss';

const BookShelfTitle = ({ title }) => {
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
};

export default BookShelfTitle;
