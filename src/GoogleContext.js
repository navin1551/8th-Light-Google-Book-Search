import React from "react";

const GoogleContext = React.createContext({
  books: [],
  readingList: [],
  updateBooks: () => {},
  addToReadingList: () => {}
});

export default GoogleContext;
