import React from "react";
import ReactDOM from "react-dom";
import MyBooks from "../components/MyBooks/MyBooks";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MyBooks />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
