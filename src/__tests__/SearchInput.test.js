import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import SearchInput from "../components/SearchInput/SearchInput";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>,
    div
  );
});

it("renders SearchInput correctly", () => {
  render(
    <BrowserRouter>
      <SearchInput />
    </BrowserRouter>
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SearchInput />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
