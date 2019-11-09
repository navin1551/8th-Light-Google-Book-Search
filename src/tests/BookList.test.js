import React from "react";
import ReactDOM from "react-dom";
import BookList from "../components/BookList/BookList";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <BookList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
