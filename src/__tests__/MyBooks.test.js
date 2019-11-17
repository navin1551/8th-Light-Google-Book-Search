import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import MyBooks from "../components/MyBooks/MyBooks";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MyBooks />, div);
});

it("renders MyBooks correctly", () => {
  render(<MyBooks />);
});

it("matches snapshot", () => {
  const tree = renderer.create(<MyBooks />).toJSON();
  expect(tree).toMatchSnapshot();
});
