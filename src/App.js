import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./components/BookList/BookList";
import "./App.css";

export default class App extends React.Component {
  state = {
    books: [],
    searchTerm: ""
    // allBooks: [],
    // categories: []
  };

  updateBooks = books => {
    this.setState({
      books: books
      //allBooks: books
    });
  };
  render() {
    return (
      <div className="App">
        <div className="Book-search-heading">
          <h1>Google Book Search</h1>
        </div>
        <main>
          <SearchBar updateBooks={this.updateBooks} />
          <BookList books={this.state.books} />
        </main>
      </div>
    );
  }
}
