import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import SearchBar from "../components/SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>,
    div
  );
});

it("renders SearchBar correctly", () => {
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
