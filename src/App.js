import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ReadingList from "./components/ReadingList/ReadingList";
import GoogleContext from "./GoogleContext";
import "./App.css";

export default class App extends React.Component {
  state = {
    books: [],
    searchTerm: "",
    readingList: []
  };

  updateBooks = books => {
    this.setState({
      books: books
    });
  };

  addToReadingList = book => {
    let currentReadingList = [...this.state.readingList];
    currentReadingList.push(book);
    this.setState({
      readingList: currentReadingList
    });
  };

  render() {
    const contextValue = {
      books: this.state.books,
      readingList: this.state.readingList,
      updateBooks: this.updateBooks,
      addToReadingList: this.addToReadingList
    };

    return (
      <GoogleContext.Provider value={contextValue}>
        <div className="App">
          <main>
            <Route exact path="/" component={HomePage} />
            <Route path="/reading-list" component={ReadingList} />
          </main>
        </div>
      </GoogleContext.Provider>
    );
  }
}
