import React from "react";
import "./Book.css";

export default class Book extends React.Component {
  render() {
    return (
      <div className="Books-area">
        <section className="images__">
          <img
            className="Book-pics"
            src={
              this.props.volumeInfo.imageLinks
                ? this.props.volumeInfo.imageLinks.thumbnail
                : "NA"
            }
            alt="book pics"
          />
        </section>
        <section className="desc__">
          <h1 className="Titles">{this.props.volumeInfo.title}</h1>
          <h2 className="Authors">
            Author:{" "}
            {this.props.volumeInfo.authors
              ? this.props.volumeInfo.authors[0]
              : "NA"}
          </h2>
          <h3 className="Publisher">
            Publishing Company:{""}
            {this.props.volumeInfo.publisher
              ? this.props.volumeInfo.publisher
              : "N/A"}
          </h3>
          <button id="reading-list-button">Add To Reading List</button>
        </section>
      </div>
    );
  }
}
