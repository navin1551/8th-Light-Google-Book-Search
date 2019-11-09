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
    let id = this.context.readingList.length + 1;
    let { image, title, author, publisher } = this.state;
    const newEntry = { id, image, title, author, publisher };
    this.context.addToReadingList(newEntry);
    console.log(this.context.readingList);
  };

  render() {
    return (
      <div className="Books-area">
        <form onSubmit={this.addToReadingList}>
          <section className="book-image-area">
            <img
              className="Book-pics"
              src={
                this.props.volumeInfo.imageLinks
                  ? this.props.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              alt="book pics"
            />
          </section>
          <section className="Book-info-area">
            <h1 className="Titles">{this.props.volumeInfo.title}</h1>
            <h2 className="Authors">
              Author:{" "}
              {this.props.volumeInfo.authors
                ? this.props.volumeInfo.authors[0]
                : "N/A"}
            </h2>
            <h3 className="Publisher">
              Publisher:{""}
              {this.props.volumeInfo.publisher
                ? this.props.volumeInfo.publisher
                : "N/A"}
            </h3>
            <button id="reading-list-button">Add To Reading List</button>
          </section>
        </form>
      </div>
    );
  }
}
