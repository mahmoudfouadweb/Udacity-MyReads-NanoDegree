import './App.scss';
import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import * as bookAPI from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isAllBooks, setIsAllBooks] = useState([]);
  const [isUpdatedBook, setIsUpdatedBook] = useState();
  const [booksID, setBooksID] = useState([]);

  useEffect(() => {
    const allBooks = async () => {
      const res = await bookAPI.getAll();
      setIsAllBooks(res);
      setBooksID(res.map(b => b.id));
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

  return (
    <div className="app">
      {showSearchPage ? (
        <Search
          toggleShowSearchButton={searchHandler}
          isAllBooks={isAllBooks}
          booksID={booksID}
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
