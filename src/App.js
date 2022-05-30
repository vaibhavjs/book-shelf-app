import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { getAll } from "./BooksAPI";
import { update } from "./BooksAPI";
import Shelf from "./Shelf";
import SearchBooks from "./SearchBooks";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [booksList, setBooksList] = useState(null);
  const [displayShelf, setDisplayShelf] = useState(null);

  const shelfToggle = (book, selectedShelf) => {
    update(book, selectedShelf).then((books) => {
      setDisplayShelf(books);
    });
  };
  useEffect(() => {
    async function getAllBooks() {
      await getAll().then((books) => {
        setBooksList(books);
      });
    }
    getAllBooks();
  }, [displayShelf]);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Shelf booksList={booksList} shelfToggle={shelfToggle} />}
        />
        <Route
          path="/search"
          element={
            <SearchBooks displayBooks={booksList} shelfToggle={shelfToggle} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
