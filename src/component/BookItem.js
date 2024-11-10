import React from "react";

function BookItem({ book }) {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="book-item">
      <img src={coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
      <p>{book.first_publish_year || "N/A"}</p>
    </div>
  );
}

export default BookItem;
