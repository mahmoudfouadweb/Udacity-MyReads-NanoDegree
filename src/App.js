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
      currentlyReadingHandler(allBooks);
      wantToReadHandler(allBooks);
      readHandler(allBooks);
    });
  }, []);

  const currentlyReadingHandler = allBooks => {
    const currentlyReading = allBooks.filter(
      book => book.shelf === 'currentlyReading'
    );

    setIsCurrentlyReading([...isCurrentlyReading, , ...currentlyReading]);
  };

  const wantToReadHandler = allBooks => {
    const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');
    setIsWantToRead([...isWantToRead, ...wantToRead]);
  };

  const readHandler = allBooks => {
    const read = allBooks.filter(book => book.shelf === 'read');
    setIsRead([...isRead, ...read]);
  };

  const searchHandler = close => {
    setShowSearchpage(close);
  };
  return (
    <div className="app">
      {showSearchPage ? (
        <Search toggleShowSearchButton={searchHandler} />
      ) : (
        <BookList toggleShowSearchButton={searchHandler} />
      )}
    </div>
  );
}

export default App;
