import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Book from "../components/Book/Book";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const volumeInfo = {
    title: "Test Props"
  };

  ReactDOM.render(shallow(<Book volumeInfo={volumeInfo} />), div);
  ReactDOM.unmountComponentAtNode(div);
});
