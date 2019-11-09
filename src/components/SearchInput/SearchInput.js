import React from "react";
import GoogleContext from "../../GoogleContext";
import { Link } from "react-router-dom";
import "./SearchInput.css";

export default class SearchInput extends React.Component {
  state = {
    noInputMessage: false
  };
  static contextType = GoogleContext;

  onSubmitSearch = event => {
    event.preventDefault();
    let googleBooksApiKey = "AIzaSyB0W_50RPy4A18TAA8mA5zHdGQ52QT6_Sw";
    let search = event.target.Search.value;

    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=5&key=${googleBooksApiKey}`;

    if (!search) {
      this.setState({
        noInputMessage: true
      });
    }

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(data => {
        this.context.updateBooks(data.items);
        this.setState({
          noInputMessage: false
        });
      })
      .catch(error => {
        console.log({ error });
      });
  };

  render() {
    let errorMessage = this.state.noInputMessage ? "Enter Search Value" : "";
    return (
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <div className="search-input-area">
            <label htmlFor="Search">Search:</label>
            <input type="text" name="Search" id="user-search" placeholder="" />
            <button id="search-button">Search</button>
            <Link to="reading-list" id="reading-list-link">
              My Reading List
            </Link>
          </div>
        </form>
        <div className="no-value-message-area">{errorMessage}</div>
      </div>
    );
  }
}
