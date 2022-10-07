import React, { useEffect, useState } from 'react';
import { search } from '../../BooksAPI';
import Card from '../Card/Card';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
// import classes from './search.module.scss';

const Search = ({ toggleShowSearchButton }) => {
  const [searchItem, setSearchItem] = useState([]);
  const [searchContent, setSearchContent] = useState('t');

  const userInput = e => {
    setSearchContent(e.currentTarget.value);
  };

  useEffect(() => {
    search(searchContent).then(data => setSearchItem([...data]));
    // setSearchItem([...searchItem, books]);
  }, [searchContent]);
  console.log(searchContent);
  console.log(searchItem);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a
          href="#"
          className="close-search"
          onClick={() => toggleShowSearchButton(!true)}
        >
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            value={searchContent}
            onChange={e => userInput(e)}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchContent && <Card onSearch={searchItem} />}
        </ol>
      </div>
    </div>
  );
};

export default Search;
