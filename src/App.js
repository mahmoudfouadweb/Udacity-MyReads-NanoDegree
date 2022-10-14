import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as bookAPI from './BooksAPI';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import './App.scss';

function App() {
  /////////////////////////////////////////////////
  // STATS FOR COMPONENTS CONTROL
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

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/search"
            element={
              <Search
                isAllBooks={isAllBooks}
                booksID={booksID}
                updateBookShelf={updateBookShelf}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <BookList
                isAllBooks={isAllBooks}
                updateBookShelf={updateBookShelf}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
