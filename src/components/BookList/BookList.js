import React from "react";
import Book from "../Book/Book";
import GoogleContext from "../../GoogleContext";
import "./BookList.css";

export default class BookList extends React.Component {
  static contextType = GoogleContext;

  render() {
    const books = this.context.books.map((book, i) => (
      <Book {...book} key={i} />
    ));
    let noResultsMessage = this.context.showNoResultsText
      ? "Try Again Later"
      : "";
    return (
      <div>
        {books}
        <p>{noResultsMessage}</p>
      </div>
    );
  }
}
