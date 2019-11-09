import React from "react";
import GoogleContext from "../../GoogleContext";
import { Link } from "react-router-dom";
import MyBooks from "../MyBooks/MyBooks";
import "./ReadingList.css";

export default class ReadingList extends React.Component {
  static contextType = GoogleContext;

  render() {
    let myReadingList = this.context.readingList.map((entry, i) => (
      <MyBooks
        image={entry.image.thumbnail}
        title={entry.title}
        author={entry.author}
        publisher={entry.publisher}
        key={i}
      />
    ));
    return (
      <div>
        <div className="my-reading-list-header">
          <span id="my-reading-list-title">My Reading List</span>
          <Link to="/" id="search-link">
            Back To Search
          </Link>
        </div>
        <div>{myReadingList}</div>
      </div>
    );
  }
}
