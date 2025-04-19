import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  // GET BOOKS
  useEffect(() => {
    fetch('/books.json')
      .then(response => response.json())
      .then(data =>
        setBooks(
          data.slice(0, 100).map(book => ({ ...book, favourite: false }))
        )
      )
      .catch(error => console.error('Error fetching books:', error));
  }, []);
  const toggleFavourite = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].favourite = !updatedBooks[index].favourite;
    setBooks(updatedBooks);
  };


  // INDIVIDUAL BOOK CARDS
  const BookCard = ({ book, onFavouriteClick }) => (
    <div className="card">
      <button className="favourite-button" onClick={onFavouriteClick}>
        {book.favourite ? 'UNFAVOURITE ❤' : 'FAVOURITE ❤'}
      </button>
      <p>{book.author}</p>
      <h4>{book.title}</h4>
      <p>{book.pages} pages</p>
      <img src={`/${book.imageLink}`} alt={`${book.title} cover`} />
      <a href={book.link.trim()} target="_blank" rel="noopener noreferrer">
        READ MORE ✚
      </a>
    </div>
  );


  // FAVOURITE BOOKS COMPONENT
  const FavouriteBooks = () => {
    const favouriteBooks = books.filter(book => book.favourite);
    return (
      <div className="favourite-books">
        {favouriteBooks.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onFavouriteClick={() =>
              toggleFavourite(books.findIndex(b => b === book))
            }
          />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <div className="layout">
        <div className="header-bar">
          <h1 className="titles">Books</h1>
          <div className="book-card-container">
            {books
              .filter(book => !book.favourite)
              .map((book, index) => (
                <BookCard
                  key={index}
                  book={book}
                  onFavouriteClick={() => toggleFavourite(index)}
                />
              ))}
          </div>
        </div>

        <div className="header-bar">
          <h1 className="titles">Favourites</h1>
          <div className="favourite-books-container">
            <FavouriteBooks />
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
