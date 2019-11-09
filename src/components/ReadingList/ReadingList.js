import React from "react";
import GoogleContext from "../../GoogleContext";
import MyBooks from "../MyBooks/MyBooks";

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
        <h1>My Reading List</h1>
        <ul>{myReadingList}</ul>
      </div>
    );
  }
}
