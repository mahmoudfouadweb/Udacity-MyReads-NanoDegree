import React, { useEffect, useState } from 'react';
import ShelfChanger from '../ShelfChanger/ShelfChanger';
import classes from './card.module.scss';

const Card = props => {
  const currentBook = {
    id: props.id,
    shelf: props.shelf,
    title: props.title,
    authors: props.authors,
    thumbnail: props.thumbnail,
  };
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
          <ShelfChanger
            setIsUpdating={props.setIsUpdating}
            isChange={props.isChange}
            key={props.i}
            // updateShelf={() =>
            //   props.updateShelf({
            //     id: props.id,
            //     shelf: props.shelf,
            //     title: props.title,
            //     authors: props.authors,
            //     thumbnail: props.thumbnail,
            //   })
            // }
            updateShelf={props.updateShelf}
            currentBook={currentBook}
          />
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{props.authors}</div>
      </div>
    </li>
  );

  return <React.Fragment>{render}</React.Fragment>;
};

export default Card;
