import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import ReadingList from "../components/ReadingList/ReadingList";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ReadingList />
    </BrowserRouter>,
    div
  );
});

it("renders ReadingList correctly", () => {
  render(
    <BrowserRouter>
      <ReadingList />
    </BrowserRouter>
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ReadingList />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
