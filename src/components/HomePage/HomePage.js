import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import BookList from "../BookList/BookList";
import GoogleContext from "../../GoogleContext";
import "./HomePage.css";

export default class HomePage extends React.Component {
  static contextType = GoogleContext;

  render() {
    return (
      <div className="home-page-area">
        <div className="book-search-heading">
          <h1 className="google-book-title">Google Book Search</h1>
        </div>
        <div>
          <SearchBar updateBooks={this.context.updateBooks} />
          <BookList books={this.context.books} />
        </div>
      </div>
    );
  }
}
