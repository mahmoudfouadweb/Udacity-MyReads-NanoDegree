import React, { useState } from 'react';
import BookShelf from '../BookShelf/BookShelf';



const BookList = ({ toggleShowSearchButton }) => {
  const [isCurrentlyReading, setIsCurrentlyReading] = useState([
    {
      id: '12',
      title: 'To Kill a Mockingbird',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
      },
      authors: 'Orson Scott Card',
    }
  ]);
  const [isWantToRead, setIsWantToRead] = useState([
    {
      id: '123',
      title: '1776',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
      },
      authors: 'David McCullough',
    },
  ]);
  const [isRead, setIsRead] = useState([
    {
      id: '1234',
      title: 'The Hobbit',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
      },
      authors: 'J.R.R. Tolkien',
    },
  ]);

  const currentlyReadingHandler = () => {
    const newBook = {
      id: 
    }
  }
  
  
  const bookChangeHandler = isChange => {
    console.log('THE MAIN FUNCTION');
    if (isChange === 'none') {
      console.log('none');
    } else if (isChange === 'currentlyReading') {
      console.log('Currently Reading');
    } else if (isChange === 'wantToRead') {
      console.log('Want to Read');
    } else if (isChange === 'read') {
      console.log('Read');
    }
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            book={isCurrentlyReading}
            title={'Currently Reading'}
            onChange={bookChangeHandler}
          />
          <BookShelf
            book={isWantToRead}
            title={'Want to Read'}
            onChange={bookChangeHandler}
          />
          <BookShelf
            book={isRead}
            title={'Read'}
            onChange={bookChangeHandler}
          />
        </div>
      </div>
      <div className="open-search">
        <a href="#" onClick={() => toggleShowSearchButton(!false)}>
          Add a book
        </a>
      </div>
    </div>
  );
};

export default BookList;
