import './App.scss';
import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import { getAll } from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isCurrentlyReading, setIsCurrentlyReading] = useState([]);
  const [isWantToRead, setIsWantToRead] = useState([]);
  const [isRead, setIsRead] = useState([]);
  useEffect(() => {
    let allBooks = [];
    getAll().then(data => {
      for (const key in data) {
        const book = {
          id: data[key].id,
          title: data[key].title,
          thumbnail: data[key].imageLinks.thumbnail,
          authors: data[key].authors,
          shelf: data[key].shelf,
        };
        allBooks.push(book);
      }
      console.log(allBooks);

      // will be a function
      const currentlyReading = allBooks.filter(
        book => book.shelf === 'currentlyReading'
      );
      const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');
      const read = allBooks.filter(book => book.shelf === 'read');
      setIsCurrentlyReading([...isCurrentlyReading, , ...currentlyReading]);
      setIsWantToRead([...isWantToRead, ...wantToRead]);
      setIsRead([...isRead, ...read]);
    });
  }, []);

  const searchHandler = close => {
    setShowSearchpage(close);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search toggleShowSearchButton={searchHandler} />
      ) : (
        <BookList
          toggleShowSearchButton={searchHandler}
          isCurrentlyReading={isCurrentlyReading}
          setIsCurrentlyReading={setIsCurrentlyReading}
          isWantToRead={isWantToRead}
          setIsWantToRead={setIsWantToRead}
          isRead={isRead}
          setIsRead={setIsRead}
        />
      )}
    </div>
  );
}

export default App;
