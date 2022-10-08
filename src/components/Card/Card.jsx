import React, { useEffect, useState } from 'react';
import { getAll, update } from '../../BooksAPI';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = props => {
  const [isChange, setIsChange] = useState('none');
  const [isAllBooks, setIsAllBooks] = useState([]);

  const bookChangeHandler = isChange => {
    // const newEntry = {
    //   id: props.id,
    //   title: props.title,
    //   thumbnail: props.thumbnail,
    //   author: props.authors,
    //   shelf: isChange,
    // };
    // props.allBookHandler([newEntry]);
    // console.log('THE MAIN FUNCTION');
    // console.log(newEntry);
    // console.log(isChange);
    // return newEntry;
  };
  useEffect(() => {
    async function currentRead() {
      const newEntry = {
        id: props.id,
        title: props.title,
        thumbnail: props.thumbnail,
        author: props.authors,
        shelf: isChange,
      };
      if (newEntry.shelf === 'currentlyReading') {
        props.setIsCurrentlyReading([...props.isCurrentlyReading, newEntry]);
        const result = await update(newEntry, newEntry.shelf);
        console.log(result);
      }
    }
  }, [isChange]);

  useEffect(() => {
    const all = getAll();
    all.then(data => setIsAllBooks([...isAllBooks, ...data]));
  }, []);
  console.log(isAllBooks);
  const render = (
    <li key={props.id} id={props.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.thumbnail})`,
            }}
          ></div>
          <ShelfChanger setIsChange={setIsChange} />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
