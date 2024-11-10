import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ title, author });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
