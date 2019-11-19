import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Book from "../components/Book/Book";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const volumeInfo = {
    title: "Test Props"
  };

  ReactDOM.render(
    shallow(
      <BrowserRouter>
        <Book volumeInfo={volumeInfo} />
      </BrowserRouter>
    ),
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
