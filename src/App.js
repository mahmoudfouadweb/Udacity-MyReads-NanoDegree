import './App.scss';
import { useState } from 'react';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const searchHandler = close => {
    setShowSearchpage(close);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search toggleShowSearchButton={searchHandler} />
      ) : (
          <BookList toggleShowSearchButton={searchHandler } />
      )}
    </div>
  );
}

export default App;
