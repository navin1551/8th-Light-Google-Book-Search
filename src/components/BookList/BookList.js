import React from "react";
import Book from "../Book/Book";
import "./BookList.css";

export default class BookList extends React.Component {
  render() {
    const books = this.props.books.map((book, i) => <Book {...book} key={i} />);
    return <div>{books}</div>;
  }
}
