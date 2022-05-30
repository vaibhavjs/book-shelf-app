import { useState, useEffect } from "react";
import { search } from "./BooksAPI";
import { Link } from "react-router-dom";
import Title from "./Title";

const SearchBooks = ({ shelfToggle, displayBooks }) => {
  const [titleSearch, setTitleSearch] = useState("");
  const [titleResult, setTitleResults] = useState(null);
  const searchResults = (term) => {
    if (term !== "") {
      search(term).then((result) => {
        if (result.error) {
          setTitleResults(null);
          return;
        } else {
          setTitleResults(result);
        }
      });
    } else {
      setTitleResults(null);
    }
  };
  const onChangeHandler = (e) => {
    setTitleSearch(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      searchResults(titleSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [titleSearch]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={titleSearch}
            onChange={onChangeHandler}
            placeholder="Search by title or author"
            aria-label="Search Bar"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {titleResult &&
            titleResult.map((book) => {
              displayBooks.map((displayBook) => {
                if (displayBook.id === book.id) {
                  book.shelf = displayBook.shelf;
                }
                return displayBook;
              });
              return (
                <Title key={book.id} book={book} shelfToggle={shelfToggle} />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
