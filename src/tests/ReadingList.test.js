import React from "react";
import ReactDOM from "react-dom";
import ReadingList from "../components/ReadingList/ReadingList";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ReadingList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
