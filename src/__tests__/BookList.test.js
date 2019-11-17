import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import BookList from "../components/BookList/BookList";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BookList />, div);
});

it("renders BookList correctly", () => {
  render(<BookList />);
});

it("matches snapshot", () => {
  const tree = renderer.create(<BookList />).toJSON();
  expect(tree).toMatchSnapshot();
});
