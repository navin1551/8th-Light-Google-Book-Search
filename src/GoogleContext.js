import React from "react";

const GoogleContext = React.createContext({
  books: [],
  updateBooks: () => {}
});

export default GoogleContext;
