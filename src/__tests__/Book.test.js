import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Book from "../components/Book/Book";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    shallow(
      <BrowserRouter>
        <Book />
      </BrowserRouter>
    ),
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
