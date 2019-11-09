import React from "react";
import ReactDOM from "react-dom";
import SearchInput from "../components/SearchInput/SearchInput";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
