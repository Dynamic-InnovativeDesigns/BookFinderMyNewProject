import React, { useState } from "react";
import SearchForm from "./component/SearchForm";
import BookList from "./component/BookList";
import axios from "axios";
import "./styles.css";
import "./component/SearchForm.css";
import "./component/BookList.css";
import "./component/BookItem.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query.title}&author=${query.author}`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <SearchForm onSearch={searchBooks} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
}

export default App;
