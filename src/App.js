import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ReadingList from "./components/ReadingList/ReadingList";
import GoogleContext from "./GoogleContext";
import "./App.css";

export default class App extends React.Component {
  state = {
    books: [],
    readingList: [],
    showNoResultsText: false
  };

  updateBooks = books => {
    this.setState({
      books: books || [],
      showNoResultsText: !books
    });
  };

  addToReadingList = book => {
    let currentReadingList = this.state.readingList;
    currentReadingList.push(book);
    this.setState({
      readingList: currentReadingList
    });
  };

  specialCharError = () => {
    this.setState({
      showNoResultsText: true
    });
  };

  render() {
    const contextValue = {
      books: this.state.books,
      readingList: this.state.readingList,
      showNoResultsText: this.state.showNoResultsText,
      updateBooks: this.updateBooks,
      addToReadingList: this.addToReadingList,
      specialCharError: this.specialCharError
    };

    return (
      <GoogleContext.Provider value={contextValue}>
        <div className="app">
          <div className="book-search-heading">
            <h1 className="google-book-title">Google Book Search</h1>
          </div>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route path="/reading-list" component={ReadingList} />
          </main>
        </div>
      </GoogleContext.Provider>
    );
  }
}
