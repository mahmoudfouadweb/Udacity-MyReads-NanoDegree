import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as bookAPI from '../../BooksAPI';
import Card from '../Card/Card';

const Search = ({ updateBookShelf, isAllBooks, booksID }) => {
  ////////////////////////////////////////////////
  // STATS FOR SEARCH COMPONENTS CONTROL
  const [searchItem, setSearchItem] = useState([]);
  const [searchContent, setSearchContent] = useState('');
  const [isNotFound, setIsNotFound] = useState('');

  ////////////////////////////////////////////////
  // REQUIRE A USER INPUT A TEXT AS DEPENDENCIES TO SEARCH
  useEffect(() => {
    // IF USER INPUT A TEXT
    if (searchContent.trim() != '') {
      bookAPI.search(searchContent).then(data => {
        // IF NOT FOUNDED AN ITEM
        if (data.error) {
          // AN ERROR MESSAGE TO THE USER
          return setIsNotFound(data.error);
        } else {
          //REMOVE USER MESSAGE
          setIsNotFound('');
          // UPDATE PAGE UI
          return setSearchItem([
            ...isAllBooks.filter(bok => data.some(x => x.id === bok.id)),
            ...data.filter(d => !booksID.includes(d.id)),
          ]);
        }
      });
      // if user type nothing
    } else if (searchContent.trim() === '') setSearchItem([]);
  }, [searchContent]);

  ////////////////////////////////////////////////
  //GET USER INPUT
  const userInput = e => {
    setSearchContent(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          close
        </Link>
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

      <div className="search-books-results">
        <ol className="books-grid">
          {!isNotFound
            ? searchItem.map(book => (
                <Card
                  key={book.id}
                  book={book}
                  updateBookShelf={updateBookShelf}
                />
              ))
            : isNotFound}
        </ol>
      </div>
    </div>
  );
};

export default Search;
