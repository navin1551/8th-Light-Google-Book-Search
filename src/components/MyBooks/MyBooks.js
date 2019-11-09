import React from "react";
import "./MyBooks.css";

export default class MyBooks extends React.Component {
  render() {
    return (
      <div className="my-book-area">
        <li>
          <img
            src={this.props.image}
            id="my-book-images"
            alt="reading-list-images"
          />
          <p>Title: {this.props.title}</p>
          <p>Author: {this.props.author}</p>
          <p>Publisher: {this.props.publisher}</p>
        </li>
      </div>
    );
  }
}
