import React from "react";
import GoogleContext from "../../GoogleContext";
import { Link } from "react-router-dom";
import "./SearchInput.css";

export default class SearchInput extends React.Component {
  static contextType = GoogleContext;

  onSubmitSearch = event => {
    event.preventDefault();
    let googleBooksApiKey = "AIzaSyB0W_50RPy4A18TAA8mA5zHdGQ52QT6_Sw";
    let search = event.target.Search.value;

    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=5&key=${googleBooksApiKey}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(data => {
        this.context.updateBooks(data.items);
      })
      .catch(error => {
        console.log({ error });
      });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitSearch}>
        <div className="Search-input-area">
          <label htmlFor="Search">Search:</label>
          <input type="text" name="Search" id="user-search" placeholder="" />
          <button id="search-button">Search</button>
          <Link to="reading-list" id="reading-list-link">
            My Reading List
          </Link>
        </div>
      </form>
    );
  }
}
