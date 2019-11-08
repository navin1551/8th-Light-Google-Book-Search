import React from "react";
import "./SearchInput.css";

export default class SearchInput extends React.Component {
  onSubmitSearch = event => {
    event.preventDefault();
    console.log("test");
    //this.props.newSearch(event.target.Search.value)
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
        console.log(data);
        this.props.updateBooks(data.items);
      });
  };
  render() {
    return (
      <form onSubmit={this.onSubmitSearch}>
        <div className="Search-input-area">
          <label htmlFor="Search">Search:</label>
          <input type="text" name="Search" id="user-search" placeholder="" />
          {/*<input className="Search-input" type="submit" value="Search " />*/}
          <button id="search-button">Search</button>
        </div>
      </form>
    );
  }
}
