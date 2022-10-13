import './App.scss';
import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import * as bookAPI from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isAllBooks, setIsAllBooks] = useState([]);

  useEffect(() => {
    const allBooks = async () => {
      const res = await bookAPI.getAll();
      setIsAllBooks(res);
    };
    allBooks();

    return () => {
      isAllBooks.filter(book => console.log(book));
    };
  }, []);
  console.log(isAllBooks);
  const searchHandler = close => {
    setShowSearchpage(close);
  };

  const updateBookShelf = id => {};

  const getSingleBookHandler = id => {
    const getBook = async () => {
      const res = bookAPI.get(id);
      setIsAllBooks([...isAllBooks, res]);
    };
    getBook();
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search toggleShowSearchButton={searchHandler} />
      ) : (
        <BookList
          toggleShowSearchButton={searchHandler}
          isAllBooks={isAllBooks}
          
        />
      )}
    </div>
  );
}

export default App;
