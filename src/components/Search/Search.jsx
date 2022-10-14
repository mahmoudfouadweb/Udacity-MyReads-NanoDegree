import React, { useEffect, useState } from 'react';
import * as bookAPI from '../../BooksAPI';
import Card from '../Card/Card';
import classes from './search.module.scss';

const Search = ({
  toggleShowSearchButton,
  updateBookShelf,
  isAllBooks,
  booksID,
}) => {
  const [searchItem, setSearchItem] = useState([]);
  const [searchContent, setSearchContent] = useState('');
  const [isNotFound, setIsNotFound] = useState('');

  const userInput = e => {
    setSearchContent(e.target.value);
    console.log(e.currentTarget.value);
  };

  useEffect(() => {
    if (searchContent)
      bookAPI
        .search(searchContent)
        .then(data => {
          // console.log(data);
          if (data.error) {
            setIsNotFound(data.error);
          } else {
            setIsNotFound('');
            const filteredCurrent = isAllBooks.filter(bok =>
              data.some(x => x.id === bok.id)
            );
            const da = data.filter(d => !booksID.includes(d.id));
            console.log(booksID);
            console.log(da);
            setSearchItem([ ...filteredCurrent,...da]);
            // console.log(filteredCurrent);
            // const filteredSearched = data.filter(
            //   x => x.id != filteredCurrent.includes(x.id)
            // );
            fn(data, filteredCurrent);
            console.log(fn(data, filteredCurrent));
            // console.log(filteredSearched);
          }
        })
        .catch(e => {
          console.log(e);
        });
  }, [searchContent]);

  const searchBookHandel = currentSearchedBook => {
    const filteredSearch = searchItem.filter(
      book => book.id != currentSearchedBook.id
    );
    setSearchItem([...filteredSearch, currentSearchedBook]);

    console.log(filteredSearch);
    console.log(currentSearchedBook);
  };
  console.log(searchItem);

  const fn = (array, filtered) => {
    return [
      ...array.filter(x => !filtered.includes(x)),
      ...filtered.filter(x => !array.includes(x)),
    ];
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
          {!isNotFound
            ? searchItem.map(book => (
                <Card
                  key={book.id}
                  book={book}
                  updateBookShelf={updateBookShelf}
                  searchBookHandel={searchBookHandel}
                  isAllBooks={isAllBooks}
                />
              ))
            : isNotFound}
        </ol>
      </div>
    </div>
  );
};

export default Search;
