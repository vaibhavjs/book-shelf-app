import SettingShelf from "./SettingShelf";

const Title = ({ book, shelfToggle }) => {
  const title = book.title;
  const thumbnail = book.imageLinks && book.imageLinks.thumbnail;
  const authors = book.authors;
  const shelfPresent = book.shelf;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail || "/fallback.jpg"})`,
            }}
          ></div>
          <SettingShelf
            shelfPresent={shelfPresent}
            book={book}
            shelfToggle={shelfToggle}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors &&
            authors.map((author, index) => (
              <span key={index}>
                {author} <br />
              </span>
            ))}
        </div>
      </div>
    </li>
  );
};

export default Title;
