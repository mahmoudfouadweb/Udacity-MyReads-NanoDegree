import React, { useEffect, useState } from 'react';
import { search } from '../../BooksAPI';
import Card from '../Card/Card';
import classes from './search.module.scss';

const Search = ({ toggleShowSearchButton, isChange }) => {
  const [searchItem, setSearchItem] = useState([]);
  const [searchContent, setSearchContent] = useState('');

  const userInput = e => {
    setSearchContent(e.currentTarget.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          className="close-search"
          onClick={() => toggleShowSearchButton(!true)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            value={searchContent}
            focus="true"
            onChange={e => userInput(e)}
            type="text"
            placeholder="Search by title, author, or ISBN"
            className="search-book-input"
          />
        </div>
      </div>
      {/* <div className={classes.erro}>
        <p>Book not found</p>
      </div> */}
      <div className="search-books-results">
        <ol className="books-grid">
          {searchContent &&
            searchItem.map(item => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnail={item.imageLinks.thumbnail}
                authors={item.authors}
                onChange={isChange}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
