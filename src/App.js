import { useEffect, useState } from 'react';
import * as bookAPI from './BooksAPI';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import './App.scss';

function App() {
  /////////////////////////////////////////////////
  // STATS FOR COMPONENTS CONTROL
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isAllBooks, setIsAllBooks] = useState([]);
  const [isUpdatedBook, setIsUpdatedBook] = useState();
  const [booksID, setBooksID] = useState([]);
  /////////////////////////////////////////////////
  // GET ALL MY BOOKS WITH NO DEPENDENCIES
  useEffect(() => {
    const allBooks = async () => {
      const res = await bookAPI.getAll();
      setIsAllBooks(res);
      setBooksID(res.map(b => b.id));
    };
    allBooks();
  }, []);

  /////////////////////////////////////////////////
  // UPDATE BOOK SHELF TYPE
  useEffect(() => {
    if (isUpdatedBook) bookAPI.update(isUpdatedBook, isUpdatedBook.shelf);
  }, [isUpdatedBook]);
  /////////////////////////////////////////////////
  // CLICKED BOOK UPDATE SHELF TYPE HANDLER
  const updateBookShelf = (book, isChange) => {
    // SET UPDATED DATA
    const currentBook = {
      ...book,
      shelf: isChange,
    };

    // REMOVE OLD DATA BOOKS AND SET UPDATED ITEMS
    setIsUpdatedBook(currentBook);
    const filterBooks = isAllBooks.filter(book => book.id != currentBook.id);
    setIsAllBooks([...filterBooks, currentBook]);
  };

  /////////////////////////////////////////////////
  // CLOSE BUTTON HANDLER
  const searchHandler = close => {
    setShowSearchpage(close);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        // SEARCH PAGE
        <Search
          toggleShowSearchButton={searchHandler}
          isAllBooks={isAllBooks}
          booksID={booksID}
          updateBookShelf={updateBookShelf}
        />
      ) : (
        // MY BOOKS PAGE
        <BookList
          toggleShowSearchButton={searchHandler}
          isAllBooks={isAllBooks}
          updateBookShelf={updateBookShelf}
        />
      )}
    </div>
  );
}

export default App;
