import { Link } from "react-router-dom";

import Title from "./Title";

const Shelf = ({ booksList, shelfToggle }) => {
  const currentlyReading =
    booksList && booksList.filter((book) => book.shelf === "currentlyReading");
  const wantToRead =
    booksList && booksList.filter((book) => book.shelf === "wantToRead");
  const read = booksList && booksList.filter((book) => book.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading &&
                  currentlyReading.map((book, index) => {
                    return (
                      <Title
                        key={index}
                        book={book}
                        shelfToggle={shelfToggle}
                      />
                    );
                  })}
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead &&
                  wantToRead.map((book, index) => {
                    return (
                      <Title
                        key={index}
                        book={book}
                        shelfToggle={shelfToggle}
                      />
                    );
                  })}
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read &&
                  read.map((book, index) => {
                    return (
                      <Title
                        key={index}
                        book={book}
                        shelfToggle={shelfToggle}
                      />
                    );
                  })}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">+</Link>
      </div>
    </div>
  );
};

export default Shelf;
