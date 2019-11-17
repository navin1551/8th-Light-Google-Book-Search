import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import HomePage from "../components/HomePage/HomePage";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
    div
  );
});

it("renders HomePage correctly", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
