import './App.scss';
import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import * as bookAPI from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isAllBooks, setIsAllBooks] = useState([]);
  const [isUpdatedBook, setIsUpdatedBook] = useState();
  useEffect(() => {
    const allBooks = async () => {
      const res = await bookAPI.getAll();
      setIsAllBooks(res);
    };
    allBooks();
  }, []);
  console.log(isAllBooks);
  const searchHandler = close => {
    setShowSearchpage(close);
  };

  useEffect(() => {
    if (isUpdatedBook) bookAPI.update(isUpdatedBook, isUpdatedBook.shelf);
  }, [isUpdatedBook]);

  const updateBookShelf = (book, isChange) => {
    console.log(book);
    const currentBook = {
      id: book.id,
      title: book.title,
      author: book.authors,
      imageLinks: {
        smallThumbnail: book.imageLinks.smallThumbnail,
      },
      shelf: isChange,
    };
    console.log(currentBook);
    setIsUpdatedBook(currentBook);
    const filterBooks = isAllBooks.filter(book => book.id != currentBook.id);
    setIsAllBooks([...filterBooks, currentBook]);
  };

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
        <Search
          toggleShowSearchButton={searchHandler}
          isAllBooks={isAllBooks}
          updateBookShelf={updateBookShelf}
        />
      ) : (
        <BookList
          toggleShowSearchButton={searchHandler}
          isAllBooks={isAllBooks}
          setIsAllBooks={setIsAllBooks}
          updateBookShelf={updateBookShelf}
        />
      )}
    </div>
  );
}

export default App;
