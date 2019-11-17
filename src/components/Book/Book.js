import React from "react";
import GoogleContext from "../../GoogleContext";
import "./Book.css";

export default class Book extends React.Component {
  state = {
    image: this.props.volumeInfo.imageLinks,
    title: this.props.volumeInfo.title,
    author: this.props.volumeInfo.authors,
    publisher: this.props.volumeInfo.publisher
  };

  static contextType = GoogleContext;

  addToReadingList = e => {
    e.preventDefault();
    const newEntry = {
      image: this.props.volumeInfo.imageLinks,
      title: this.props.volumeInfo.title,
      author: this.props.volumeInfo.authors,
      publisher: this.props.volumeInfo.publisher
    };
    let id = this.context.readingList.length + 1;
    this.context.addToReadingList({ id, ...newEntry });
  };

  render() {
    return (
      <div className="books-area" data-testid="book">
        <form onSubmit={this.addToReadingList}>
          <section className="book-image-area">
            <img
              className="book-pics"
              src={
                this.props.volumeInfo.imageLinks
                  ? this.props.volumeInfo.imageLinks.thumbnail
                  : "N/A"
              }
              alt="book pics"
            />
          </section>
          <section className="book-info-area">
            <h1 className="titles">{this.props.volumeInfo.title}</h1>
            <h2 className="authors">
              Author:{" "}
              {this.props.volumeInfo.authors
                ? this.props.volumeInfo.authors[0]
                : "N/A"}
            </h2>
            <h3 className="publisher">
              Publisher:{" "}
              {this.props.volumeInfo.publisher
                ? this.props.volumeInfo.publisher
                : "N/A"}
            </h3>
            <button id="reading-list-button">Add To My Reading List</button>
          </section>
        </form>
      </div>
    );
  }
}
